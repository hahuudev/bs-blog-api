import jwt from "jsonwebtoken";
import UserModel from "../users/models/user.model";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

const checkAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers.authorization) {
            return res.status(400).json({ message: "Unauthenticated - Bạn chưa đăng nhập" });
        }

        const token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, process.env.PRIVATE_KEY as string, async (error, payload: any) => {
            if (error) {
                return res.status(401).json({ message: error.message });
            }

            const userDb = await UserModel.findOne({ where: { email: payload.email } });
            if (!userDb) {
                return res.status(400).json({ message: "Unauthorized - Bạn không có quyền" });
            }

            (req as any).user = userDb;
            next();
        });
    } catch (error: any) {
        res.status(500).json({ error: true, message: error.message });
    }
};

export default checkAuthenticated;
