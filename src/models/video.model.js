import { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile : {
        type: String,    // cloudinary url
        required: true
    },
    thumbnail : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    duration : {
        type: Number,
        required: true,
    },
    views : {
        type: Number,
        default: 0
    },
    isPublished : {
        type: Boolean,
        default: true
    },
    url : {
        type: String
    },
    uploaded_at: {
        type: Date,
        default: Date.now
    },    
    owner : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

// add plugin
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = model("Video", videoSchema);