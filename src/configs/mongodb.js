import mongoose from "mongoose";
import "dotenv/config";

export default async function ConnectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (error) {
        console.log(error);
    }
}
