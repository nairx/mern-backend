import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  email: { type: String },
  cart: [{ type: Object }],
  orderValue: { type: Number },
});

const orderModel = mongoose.model("orders",orderSchema)

export default orderModel