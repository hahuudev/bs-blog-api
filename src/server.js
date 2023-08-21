import express from "express";
import mongoose from "mongoose";
import connectDb from "~/configs/mongodb";
import router from "./router";

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/", (req, res) => {
    res.send("Hello word");
});

router(app);
connectDb();
mongoose.connection.once("open", () => {
    console.log("Connect DB successfully");

    // Start Server
    app.listen(PORT, () => {
        console.log(`Hello Hà Hữu Dev, I am running at:${PORT}/`);
    });
});
