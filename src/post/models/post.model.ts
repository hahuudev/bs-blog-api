import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../configs/mysql";

export interface PostAttributes {
    id?: number;
    title: string;
    avatar: string;
    description: string;
    content: string;

    commentCounts: number;
}

class PostModel extends Model<PostAttributes> {
    static associate(models: any) {}
}

PostModel.init(
    {
        title: { type: DataTypes.STRING, allowNull: false },
        avatar: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        content: { type: DataTypes.STRING, allowNull: false },
        commentCounts: { type: DataTypes.NUMBER, defaultValue: 0 },
    },
    {
        sequelize,
        modelName: "Post",
    }
);

export default PostModel;
