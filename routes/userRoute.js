import {
  addUser,
  deleteUser,
  login,
  showUsers,
} from "../controllers/userController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/", authenticate, authorize("admin"), showUsers);
userRouter.post("/login", login);
userRouter.post("/signup", addUser);
userRouter.delete("/:id", authenticate, authorize("admin"), deleteUser);

export default userRouter;
