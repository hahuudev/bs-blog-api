class PostController {
    index(req, res, next) {
        try {
            res.json("hi");
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    }
}

export default new PostController();
