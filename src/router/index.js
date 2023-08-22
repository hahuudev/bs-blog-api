import routerPost from "./post.router";
import routerAuth from './auth.router'

const router = (app) => {
    app.use("/api/posts", routerPost);
    app.use('/auth', routerAuth);
};

export default router;
