import express from "express";
import userController from "~/controllers/user.controller";
import * as userValidator from "~/validators/user.validator";

const routerUser = express.Router();

routerUser.route("/:id").get(userController.getById).put(userValidator.update, userController.update).delete(userController.remove);
routerUser.route("/").get(userController.index).post(userValidator.create, userController.create);

export default routerUser;
