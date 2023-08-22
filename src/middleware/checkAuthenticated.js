import jwt from "jsonwebtoken";
import UserModel from "~/models/user.model";
import "dotenv/config";

const checkAuthenticated = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(400).json({ message: "Unauthorized" });
        }

        const token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, process.env.PRIVATE_KEY, async (error, payload) => {
            if (error) {
                res.status(401).json({ message: error.message });
            }

            const userDb = await UserModel.findOne({ email: payload.email });
            if (!userDb) {
                return res.status(400).json({ message: "Unauthorized" });
            }

            req.user = userDb;
            next();
        });
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
};

export default checkAuthenticated;
