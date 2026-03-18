import orderModel from "../models/orderModel.js";

const placeOrder = async (req,res) => {
    const order = await orderModel.create(req.body)
    res.json(order)
}

const showOrders = async (req,res) => {
    const email = req.params.email
    const orders = await orderModel.find({email})
    res.json(orders)
}

export {placeOrder,showOrders}