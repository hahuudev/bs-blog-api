import { where } from "sequelize";
import PostModel, { PostAttributes } from "../models/post.model";

export const getAll = (queryParams: any) => {
    const { page = 1, limit = 10, sort = "createdAt", fieldSearch, search, order = 'ASC', ...query } = queryParams;
    const skip = (page - 1) * limit;
    const sortOptions = [[sort], order];

    return PostModel.findAll({
        where: query,
        offset: skip,
        limit,
        // order: sortOptions,
    });
};

export const countDocuments = () => {
    return PostModel.count();
};

export const getById = (id: number) => {
    return PostModel.findOne({ where: { id } });
};
export const create = (data: PostAttributes) => {
    return PostModel.create(data);
};
export const update = (id: number, data: PostAttributes) => {
    return PostModel.update(data, {
        where: {
            id,
        },
    });
};
export const remove = (id: number) => {
    return PostModel.destroy({
        where: {
            id,
        },
    });
};
