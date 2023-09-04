import express from "express";
import commentController from "../controllers/comment.controller";
import checkAuthenticated from "../../middlewares/checkAuthenticated";
import checkPermission from "../../middlewares/checkPermission";
import * as commentValidator from '../dtos/comment.dto'

const routerComment = express.Router();

routerComment
    .route("/:id")
    .get(commentController.getById)
    .put(checkAuthenticated, checkPermission, commentValidator.update, commentController.update)
    .delete(checkAuthenticated, checkPermission, commentController.remove);
routerComment.route("/").get(commentController.index).post( commentValidator.create, commentController.create);

export default routerComment;
