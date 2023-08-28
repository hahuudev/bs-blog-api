import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comment = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "users", require: true },
        postId: { type: Schema.Types.ObjectId, require: true },
        content: { type: String, require: true },
        parentId: { type: Schema.Types.ObjectId, default: null },
    },
    { collection: "comments", timestamps: true }
);

const CommentModel = mongoose.model("comments", Comment);

export default CommentModel;
