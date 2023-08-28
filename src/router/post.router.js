import express from "express";
import postController from "~/controllers/post.controller";
import checkAuthenticated from "~/middleware/checkAuthenticated";
import checkPermission from "~/middleware/checkPermission";
import * as postValidators from "~/validators/post.validator";

const routerPost = express.Router();

routerPost
    .route("/:id")
    .get(postController.getById)
    .put(checkAuthenticated, checkPermission, postValidators.update, postController.update)
    .delete(checkAuthenticated, checkPermission, postController.remove);
routerPost.route("/").get(postController.index).post(checkAuthenticated, checkPermission, postValidators.create, postController.create);

export default routerPost;
