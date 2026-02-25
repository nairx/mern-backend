import {
  showProducts,
} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", showProducts);
export default productRouter;
