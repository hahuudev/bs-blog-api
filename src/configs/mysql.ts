import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize("bs-blog", "root", "hahuudev", {
    host: "localhost",
    port: 3307,
    dialect: "mysql",
});

export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection db successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
