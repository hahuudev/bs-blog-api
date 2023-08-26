import UserModel from "~/models/user.model";

export const getAll = (queryParams) => {
    const { page = 1, limit = 10, sort = "createdAt", fieldSearch, search, order = 1, ...query } = queryParams;
    const skip = (page - 1) * limit;
    const sortOptions = {
        [sort]: order === 1 ? 1 : -1,
    };

    return UserModel.find(query).select(["-password"]).skip(skip).limit(limit).sort(sortOptions);
};

export const countDocuments = () => {
    return UserModel.countDocuments();
};

export const getById = (id) => {
    return UserModel.findById(id);
};
export const create = (data) => {
    const post = new UserModel(data);
    return post.save();
};
export const update = (id, data) => {
    return UserModel.findByIdAndUpdate(id, data, { new: true });
};
export const remove = (id) => {
    return UserModel.findByIdAndDelete(id);
};
