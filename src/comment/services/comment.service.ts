import User from "../../users/models/user.model";
import CommentModel, { CommentAttributes } from "../models/comment.model";

export const getAll = (queryParams: any) => {
    const { page = 1, limit = 10, sort = "createdAt", fieldSearch, search, order = "ASC", ...query } = queryParams;
    const skip = (page - 1) * limit;
    const sortOptions = [[sort], order];

    return CommentModel.findAll({
        where: query,
        offset: skip,
        limit,
        // order: sortOptions,
        include: [
            {
                model: User,
                required: true,
                attributes: { exclude: ["createdAt", "updatedAt", "password"] },
            },
        ],
    });
};

export const countDocuments = () => {
    return CommentModel.count();
};

export const getById = (id: number) => {
    return CommentModel.findOne({ where: { id } });
};
export const create = (data: CommentAttributes) => {
    return CommentModel.create(data);
};
export const update = (id: number, data: CommentAttributes) => {
    return CommentModel.update(data, {
        where: {
            id,
        },
    });
};
export const remove = (id: number) => {
    return CommentModel.destroy({
        where: {
            id,
        },
    });
};
