import {
  addUser,
  deleteUser,
  showUsers,
} from "../controllers/userController.js";
import express from "express";
const userRouter = express.Router();

userRouter.get("/showUsers", showUsers);
userRouter.post("/addUser", addUser);
userRouter.delete("/deleteUser/:id", deleteUser);

export default userRouter
