import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: { type: "string", required: true },
        avatar: { type: "string", required: true },
        description: { type: "string", required: true },
        content: { type: "string", required: true },
        commentCounts: { type: "Number", default: 0 },
    },
    { timestamps: true, collection: "posts" }
);

const PostModel = mongoose.model("PostModel", postSchema);

export default PostModel;
