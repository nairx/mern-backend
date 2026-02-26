import {
  signup,
  login,
  saveNewUser,
  addUser,
  editUser,
  saveUser,
  showUsers,
  deleteUser,
  loginForm,
} from "../controllers/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.get("/", showUsers);
userRouter.get("/login-form", loginForm);
userRouter.get("/add", addUser);
userRouter.post("/add", saveNewUser);
userRouter.get("/:id/delete", deleteUser);
userRouter.get("/:id/edit", editUser);
userRouter.post("/:id/edit", saveUser);
export default userRouter;
