import {
  showProducts,
  deleteProduct,
  addProduct,
  saveNewProduct,
  editProduct,
  saveProduct,
  displayProducts
} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/show", showProducts);
productRouter.get("/", displayProducts);
productRouter.get("/add", addProduct);
productRouter.post("/add", saveNewProduct);
productRouter.get("/:id/delete", deleteProduct);
productRouter.get("/:id/edit", editProduct);
productRouter.post("/:id/edit", saveProduct);
export default productRouter;
