import productModel from "../models/productModel.js";
const showProducts = async (req, res) => {
  const products = await productModel.find();
  res.render("products/index",{products})
  // res.json(result);
};

const displayProducts = async (req, res) => {
  const products = await productModel.find();
  res.render("home",{products})
  // res.json(result);
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productModel.findByIdAndDelete(id);
  res.redirect("/products/show")
  // res.json(result);
};
const addProduct = async (req, res) => {
  res.render("products/add")
};
const saveNewProduct = async (req, res) => {
  const body = req.body;
  const result = await productModel.create(body);
  // res.json(result);
res.redirect("/products/show")
};

const editProduct = async (req,res) => {
  const id = req.params.id
  const product = await productModel.findOne({_id:id})
  res.render("products/edit",{product})
}

const saveProduct = async (req,res) => {
  const id = req.params.id
  const body = req.body
  await productModel.findByIdAndUpdate(id,body)
  res.redirect("/products/show")
}

export { showProducts,displayProducts,saveProduct, deleteProduct, addProduct,saveNewProduct,editProduct };
