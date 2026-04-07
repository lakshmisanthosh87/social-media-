import express from "express";
import { register, login } from "../controllers/authController.js";
import { signupValidation, loginValidation, validate } from "../middlewares/validation.js";

const autherRoutes = express.Router();

autherRoutes.post("/signup", signupValidation, validate, register);
autherRoutes.post("/login", loginValidation, validate, login);

export default autherRoutes