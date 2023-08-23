import routerPost from "./post.router";
import routerAuth from './auth.router'
import routerComment from "./comment.router";
import routerUser from "./user.router";

const router = (app) => {
    app.use("/api/posts", routerPost);
    app.use('/api/comments', routerComment)
    app.use('/api/users', routerUser)
    app.use('/auth', routerAuth);
};

export default router;
