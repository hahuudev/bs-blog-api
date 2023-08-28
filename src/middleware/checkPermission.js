const checkPermission = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(400).json({ message: "Unauthenticated" });
        }
        if (req.user.role !== "admin") {
            return res.status(400).json({ message: "Unauthorized" });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
};

export default checkPermission;
