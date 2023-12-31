import express from "express";
import mongoose from "mongoose";
import connectDb from "~/configs/mongodb";
import router from "./router";
import cors from "cors";
import checkPermission from "./middleware/checkAuthenticated";

const app = express();
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

router(app);
// app.use("/", checkPermission, (req, res) => {
//     res.send("Hello word");
// });
connectDb();
mongoose.connection.once("open", () => {
    console.log("Connect DB successfully");

    // Start Server
    app.listen(PORT, () => {
        console.log(`Hello Hà Hữu Dev, I am running at:${PORT}/`);
    });
});
