import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../configs/mysql";
import User from "../../users/models/user.model";

export interface CommentAttributes {
    id?: number;
    userId: string;
    postId: string;
    parentId: string;
    content: string;
}

class CommentModel extends Model<CommentAttributes> {
    static associate(models: any) {}
}

CommentModel.init(
    {
        userId: { type: DataTypes.NUMBER, allowNull: false },
        postId: { type: DataTypes.NUMBER, allowNull: false },
        content: { type: DataTypes.STRING, allowNull: false },
        parentId: { type: DataTypes.NUMBER },
    },
    {
        sequelize,
        modelName: "Comment",
    }
);

User.hasMany(CommentModel, { foreignKey: 'userId' });
CommentModel.belongsTo(User, {foreignKey: 'userId'})

export default CommentModel;
