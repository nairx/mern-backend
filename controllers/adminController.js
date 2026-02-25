import userModel from "../models/userModel.js";
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const result = await userModel.findByIdAndDelete(id);
  res.json(result);
};
const showUsers = async (req, res) => {
  const result = await userModel.find();
  res.json(result);
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productModel.findByIdAndDelete(id);
  res.json(result);
};
const addProduct = async (req, res) => {
  const body = req.body;
  const result = await productModel.create(body);
  res.json(result);
};

const adminHome = async (req,res)=>{
  res.render("users/index")
}

export{deleteUser,showUsers,deleteProduct,addProduct,adminHome}