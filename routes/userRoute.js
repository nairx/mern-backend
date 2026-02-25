import { signup, login } from "../controllers/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/signup", signup);
export default userRouter;
