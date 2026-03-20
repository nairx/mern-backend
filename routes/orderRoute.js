import { placeOrder,showOrders,displayOrders,showEditForm,editOrder } from "../controllers/orderController.js";
import express from "express"

const orderRouter = express.Router()

orderRouter.post("/place-order",placeOrder)
orderRouter.get("/show-orders/:email",showOrders)
orderRouter.get("/show-orders",displayOrders)
orderRouter.get("/edit/:id",showEditForm)
orderRouter.post("/edit/:id",editOrder)

export default orderRouter