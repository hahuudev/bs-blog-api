import express from "express";
import commentController from "~/controllers/comment.controller";
import * as commentValidator from "~/validators/comment.validator";

const routerComment = express.Router();

routerComment.route("/:id").get(commentController.getById).put(commentValidator.update, commentController.update).delete(commentController.remove);
routerComment.route("/").get(commentController.index).post(commentValidator.create, commentController.create);

export default routerComment;
