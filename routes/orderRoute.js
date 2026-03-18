import { placeOrder,showOrders } from "../controllers/orderController.js";
import express from "express"

const orderRouter = express.Router()

orderRouter.post("/place-order",placeOrder)
orderRouter.get("/show-orders/:email",showOrders)

export default orderRouter