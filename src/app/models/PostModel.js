import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true,
    },
    author: {
        type: String,
        required: true,
        default:'Anonymous'
    },
    acttachment: String,
    likeCount: {
        type: Number,
        default: 0
    },
    showActionsList: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true,
})

export const PostModel = mongoose.model('Post', schema);