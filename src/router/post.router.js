import express from "express";
import postController from "~/controllers/post.controller";
import * as postValidators from "~/validators/post.validator";

const routerPost = express.Router();

routerPost.route("/:id").get(postController.getById).put(postValidators.update, postController.update).delete(postController.remove);
routerPost.route("/").get(postController.index).post(postValidators.create, postController.create);

export default routerPost;
