import routerPost from "./post.router";

const router = (app) => {
    app.use("/api/posts", routerPost);
};

export default router;
