import * as PostService from "~/services/post.service";

class PostController {
    async index(req, res, next) {
        try {
            const limit = req.query.limit || 10;
            const [posts, totalPost] = await Promise.all([PostService.getAll(req.query), PostService.countDocuments()]);
            return res.status(200).json({
                message: "Get all posts successfully",
                length: posts.length || 0,
                data: posts,
                currentPage: req.query.page || 1,
                totalPage: Math.ceil(totalPost / limit),
                total: totalPost,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }

    async getById(req, res, next) {
        try {
            const post = await PostService.getById(req.params.id);

            return res.status(200).json({
                message: "Get all posts successfully",
                data: post,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }

    async create(req, res, next) {
        try {
            const post = await PostService.create(req.body);

            return res.status(200).json({
                message: "Create post successfully",
                data: post,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }

    async update(req, res, next) {
        try {
            const posts = await PostService.update(req.params.id, req.body);

            return res.status(200).json({
                message: "Update post successfully",
                data: posts,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }
    async remove(req, res, next) {
        try {
            const posts = await PostService.remove(req.params.id);

            return res.status(200).json({
                message: "Remove post successfully",
                data: posts,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }
}

export default new PostController();
