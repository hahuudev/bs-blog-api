import routerComment from "./comment/router/comment.router";
import routerPost from "./post/router/post.router";
import routerAuth from "./users/router/auth.router";

const router = (app: any) => {
    app.use("/api/posts", routerPost);
    app.use("/api/comments", routerComment);
    app.use('/auth', routerAuth)
};

export default router;
