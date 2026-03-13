import {
  signup,
  login,
  saveNewUser,
  loginForm,
  logout,
} from "../controllers/authController.js";
import express from "express";
const authRouter = express.Router();
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/signup", signup);
authRouter.get("/", loginForm);
authRouter.post("/add", saveNewUser);
export default authRouter;
