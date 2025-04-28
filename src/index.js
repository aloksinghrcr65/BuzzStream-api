import dotenv from "dotenv";
import connectDB from "./db";
import { app } from "./app";
dotenv.config({
    path: './.env'
});

connectDB().then(() => {
    app.on("error", (error) => {
        console.log("error: ", error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});

