import productModel from "../models/productModel.js";
const showProducts = async (req, res) => {
  const result = await productModel.find();
  res.json(result);
};
export { showProducts };
