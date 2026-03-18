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

const loginForm = (req, res) => {
  res.render("auth/login-form", { err: null });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const found = await userModel.findOne({ email });
  console.log("session" + req.session.user);
  if (found) {
    const chkPassword = await bcrypt.compare(password, found.password);
    if (chkPassword) {
      const user = {
        id: found._id,
        name: found.name,
        email: found.email,
        role: found.role,
      };
      if (found.role === "admin") {
        req.session.user = user;
        res.redirect("/users");
      } else {
        const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
        res.json({ ...user, token });
      }

    } else {
      res.render("auth/login-form", { error: "Invalid Password" });
      // res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.render("auth/login-form", { error: "User not found" });
    // res.status(401).json({ message: "User not found" });
  }
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
};

const saveNewUser = async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  const result = await userModel.create(body);
  res.redirect("/users");
};

export { signup, login, saveNewUser, loginForm, logout };
