import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { connectDb } from "./configs/mysql";
import router from "./app.router";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

router(app);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

connectDb();

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
