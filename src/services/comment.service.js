import CommentModel from "~/models/comment.model";
import UserModel from "~/models/user.model";

export const getAll = (queryParams) => {
    const { page = 1, limit = 10, sort = "createdAt", fieldSearch, search, order = 1, ...query } = queryParams;
    const skip = (page - 1) * limit;
    const sortOptions = {
        [sort]: order === 1 ? 1 : -1,
    };

    return CommentModel.find(query)
        .populate({ path: "userId", model: UserModel, select: ["avatar", "fullname"] })
        .skip(skip)
        .limit(limit)
        .sort(sortOptions);
};

export const countDocuments = () => {
    return CommentModel.countDocuments();
};

export const getById = (id) => {
    return CommentModel.findById(id);
};
export const create = (data) => {
    const post = new CommentModel(data);
    return post.save();
};
export const update = (id, data) => {
    return CommentModel.findByIdAndUpdate(id, data, { new: true });
};
export const remove = (id) => {
    return CommentModel.findByIdAndDelete(id);
};
