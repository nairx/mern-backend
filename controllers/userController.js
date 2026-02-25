import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const SECRET = "hello123";
const signup = async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  const result = await userModel.create(body);
  res.json(result);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const found = await userModel.findOne({ email });
  if (found) {
    const chkPassword = await bcrypt.compare(password, found.password);
    if (chkPassword) {
      const obj = {
        name: found.name,
        email: found.email,
        role: found.role,
      };
      const token = jwt.sign(obj, SECRET, { expiresIn: "1h" });
      res.status(200).json({ message: "Success", token });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const result = await userModel.findByIdAndDelete(id);
  res.redirect("/users");
  // res.json(result);
};
const showUsers = async (req, res) => {
  const users = await userModel.find();
  // res.json(result);
  res.render("users/index", { users });
};

const saveNewUser = async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  const result = await userModel.create(body);
  res.redirect("/users");
};

const addUser = async (req, res) => {
  res.render("users/add");
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findOne({ _id: id });
  res.render("users/edit", { user });
};

const saveUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const id = req.params.id;
  const user = { name, email, role };
  if (password.trim() !== "") {
    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;
  }
  await userModel.findByIdAndUpdate(id, user);
  res.redirect("/users/");
};

export {
  signup,
  login,
  deleteUser,
  saveNewUser,
  addUser,
  showUsers,
  editUser,
  saveUser,
};
