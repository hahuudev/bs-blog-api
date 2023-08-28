import express from "express";
import authController from "~/controllers/auth.controller";
import checkAuthenticated from "~/middleware/checkAuthenticated";
import * as authValidators from "~/validators/auth.validator";

const routerAuth = express.Router();

routerAuth.post("/login", authValidators.login, authController.login);
routerAuth.get("/current-user", checkAuthenticated, authController.getUserLogin);
routerAuth.post("/register", authValidators.register, authController.register);

export default routerAuth;
