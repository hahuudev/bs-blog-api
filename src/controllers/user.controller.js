import * as UserService from '~/services/user.service'

class PostController {
    async index(req, res, next) {
        try {
            const limit = req.query.limit || 10;
            const [users, totalUser] = await Promise.all([UserService.getAll(req.query), UserService.countDocuments()]);
            return res.status(200).json({
                message: "Get all users successfully",
                length: users.length || 0,
                data: users,
                currentPage: req.query.page || 1,
                totalPage: Math.ceil(totalUser / limit),
                total: totalUser,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }

    async getById(req, res, next) {
        try {
            const user = await UserService.getById(req.params.id);

            return res.status(200).json({
                message: "Get all users successfully",
                data: user,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }

    async create(req, res, next) {
        try {
            const user = await UserService.create(req.body);

            return res.status(200).json({
                message: "Create user successfully",
                data: user,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }

    async update(req, res, next) {
        try {
            const user = await UserService.update(req.params.id, req.body);

            return res.status(200).json({
                message: "Update user successfully",
                data: user,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }
    async remove(req, res, next) {
        try {
            const user = await UserService.remove(req.params.id);

            return res.status(200).json({
                message: "Remove user successfully",
                data: user,
            });
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }
}

export default new PostController();
