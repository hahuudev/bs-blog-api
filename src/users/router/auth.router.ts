import express from "express";
import authController from "../controllers/auth.controller";
import * as authValidation from "../dtos/auth.dto";

const routerAuth = express.Router();

routerAuth.post("/login", authValidation.login, authController.login);
routerAuth.post("/register", authValidation.register, authController.register);

export default routerAuth;
