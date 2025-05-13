import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {  // long duration to live, accessToken => short duration to live.
      // By using access token we can access data where need authorization and authenticated.
      // Suppose if you want to upload file on server then all are not authenticated,
      // so who are login and authenticated to perform this action. 
      // suppose if the access token is expired in 15 minutes, so from their refresh token
      // comes into the picture.
      // It is used to refreshing the expired accesstoken based on refresh token.
      // we can save that refresh token in db and also give it to user and we can validate
      // by using access token but all time we don't need to enter password for login
      // If you have refresh token then give one end point and hit that and the refresh token
      // which is have by me and the refresh token which saved in db and when both are same,
      // then the new access token is generated.

      type: String,
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash password just before storing in db.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to match entered password with hashed password
userSchema.methods.isPasswordCorrect = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// jwt is a bearer based token, it means:
// => A JWT(Json Web Token) is used as a "bearer token" for authentication.
// => Bearer simply means: "whoever holds(bears) this token is allowed access".
// => It does not check who the token holder is - just possession of the token is enough to get access.

// In simple, If you have the token, you can access protected resources,
// because you're "bearing" (holding) the proof of authentication.

// Method to generate access token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

// Method to generate refresh token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = model("User", userSchema);
