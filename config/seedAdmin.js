import bcrypt from "bcrypt";
import User from "../models/userModel.js"
const seedAdmin = async () => {
  const exists = await User.findOne({ role: "admin" });
  if (!exists) {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  await User.create({
    name: "Super Admin",
    email: process.env.ADMIN_EMAIL,
    password: hashedPassword,
    role: "admin"
  });
  console.log("Super Admin Created");
  }
};
export default seedAdmin