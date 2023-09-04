import express from "express";

import * as postValidators from "../dtos/post.dto";
import postController from "../controllers/post.controller";
import checkAuthenticated from "../../middlewares/checkAuthenticated";
import checkPermission from "../../middlewares/checkPermission";

const routerPost = express.Router();

routerPost
    .route("/:id")
    .get(postController.getById)
    .put(checkAuthenticated, checkPermission, postValidators.update, postController.update)
    .delete(checkAuthenticated, checkPermission, postController.remove);
routerPost.route("/").get(postController.index).post(checkAuthenticated, checkPermission, postValidators.create, postController.create);

export default routerPost;
