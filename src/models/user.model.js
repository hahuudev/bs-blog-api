import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: { type: "string", required: true, minLength: 4, maxLength: 50 },
        avatar: { type: "string", default: "" },
        email: { type: "string", required: true, unique: true },
        password: { type: "string", required: true },
        role: { type: "string", enum: ["admin", "user"], default: "user" },
    },
    { timestamps: true, collection: "users" }
);

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
