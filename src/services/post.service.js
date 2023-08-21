import PostModel from "~/models/post.model";

export const getAll = (queryParams) => {
    const { page = 1, limit = 10, sort = "createdAt", order = 1, ...query } = queryParams;
    const skip = (page - 1) * limit;
    const sortOptions = {
        [sort]: order === 1 ? 1 : -1,
    };

    return PostModel.find(query).skip(skip).limit(limit).sort(sortOptions);
};

export const countDocuments = () => {
    return PostModel.countDocuments();
};

export const getById = (id) => {
    return PostModel.findById(id);
};
export const create = (data) => {
    const post = new PostModel(data);
    return post.save();
};
export const update = (id, data) => {
    return PostModel.findByIdAndUpdate(id, data, { new: true });
};
export const remove = (id) => {
    return PostModel.findByIdAndDelete(id);
};
