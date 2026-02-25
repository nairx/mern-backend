import { deleteProduct,showUsers,deleteUser,adminHome } from "../controllers/adminController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import express from "express";
const adminRouter = express.Router();
adminRouter.get("/users/", authenticate, authorize("admin"), showUsers);
adminRouter.delete("/users/:id", authenticate, authorize("admin"), deleteUser);
adminRouter.delete("/products/:id", deleteProduct);
adminRouter.get("/",adminHome)
export default adminRouter;
