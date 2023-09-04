import { NextFunction, Request, Response } from "express";

const checkPermission = (req: any, res: Response, next: NextFunction) => {
    try {
        if (!req.user) {
            return res.status(400).json({ message: "Unauthenticated" });
        }
        if (req.user.role !== "admin") {
            return res.status(400).json({ message: "Unauthorized" });
        }

        next();
    } catch (error: any) {
        res.status(500).json({ error: true, message: error.message });
    }
};

export default checkPermission;
