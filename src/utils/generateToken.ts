import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (data: any, expiresIn?: string) => {
    const token = jwt.sign(data, process.env.PRIVATE_KEY as string, { expiresIn: expiresIn || "1h" });
    return token;
};

export default generateToken;
