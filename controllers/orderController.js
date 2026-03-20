import orderModel from "../models/orderModel.js";

const placeOrder = async (req, res) => {
  const order = await orderModel.create(req.body);
  res.json(order);
};

const showOrders = async (req, res) => {
  const email = req.params.email;
  const orders = await orderModel.find({ email });
  res.json(orders);
};

const displayOrders = async (req, res) => {
  const orders = await orderModel.find();
  res.render("orders/index", { orders });
};

const showEditForm = async (req, res) => {
  const id = req.params.id;
  const order = await orderModel.findOne({ _id: id });
  res.render("orders/edit", { order });
};

const editOrder = async (req, res) => {
  const id = req.params.id;
  const order = await orderModel.findByIdAndUpdate(id, req.body);
  res.redirect("/orders/show-orders")
};

export { placeOrder, showOrders, displayOrders, showEditForm, editOrder };
