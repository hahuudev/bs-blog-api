import PostModel from "~/models/post.model";

export const getAll = () => {
    return PostModel.find();
};

export const getById = (id) => {
    return PostModel.findById(id);
};
export const create = (data) => {
    const post = new PostModel(data);
    return post.save;
};
export const update = (id, data) => {
    return PostModel.findByIdAndUpdate(id, data, { new: true });
};
export const remove = (data) => {
    return PostModel.findByIdAndDelete(data._id);
};
