import express from "express";
import mongoose from "mongoose";
import connectDb from "~/configs/mongodb";
import router from "./router";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const PORT = process.env.PORT || 8000;

router(app);
app.use("/", (req, res) => {
    res.send("Hello word");
});
connectDb();
mongoose.connection.once("open", () => {
    console.log("Connect DB successfully");

    // Start Server
    app.listen(PORT, () => {
        console.log(`Hello Hà Hữu Dev, I am running at:${PORT}/`);
    });
});
