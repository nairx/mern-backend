import {
  addProduct,
  deleteProduct,
  showProducts,
} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", showProducts);
productRouter.post("/add", addProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
