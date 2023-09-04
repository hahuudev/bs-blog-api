import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../configs/mysql";

export interface UserAttributes {
    fullname: string;
    avatar: string;
    email: string;
    password: string;
    role: string;
}

class User extends Model<UserAttributes> {
    static associate(models: any) {}
}

User.init(
    {
        fullname: DataTypes.STRING,
        avatar: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
        },
    },
    {
        sequelize,
        modelName: "User",
    }
);

export default User;
