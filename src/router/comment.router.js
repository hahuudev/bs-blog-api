import express from "express";
import commentController from "~/controllers/comment.controller";
import checkAuthenticated from "~/middleware/checkAuthenticated";
import checkPermission from "~/middleware/checkPermission";
import * as commentValidator from "~/validators/comment.validator";

const routerComment = express.Router();

routerComment
    .route("/:id")
    .get(commentController.getById)
    .put(checkAuthenticated, checkPermission, commentValidator.update, commentController.update)
    .delete(checkAuthenticated, checkPermission, commentController.remove);
routerComment.route("/").get(commentController.index).post(checkAuthenticated, commentValidator.create, commentController.create);

export default routerComment;
