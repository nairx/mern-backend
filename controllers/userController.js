import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
const addUser = async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  const result = await userModel.create(body);
  res.json(result);
};
const showUsers = async (req, res) => {
  const result = await userModel.find();
  res.json(result);
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const result = await userModel.findByIdAndDelete(id);
  res.json(result);
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const found = await userModel.findOne({ email });
  if (found) {
    const chkPassword = await bcrypt.compare(password, found.password);
    if (chkPassword) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
};
export { addUser, showUsers, deleteUser, login };
