import {
  showProducts,
  deleteProduct,
} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", showProducts);
productRouter.delete("/:id", deleteProduct);
export default productRouter;
