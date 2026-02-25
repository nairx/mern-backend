import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/merndatabase");
  } catch (err) {
    console.log("Failed to Connect");
  }
};
export default dbConnect;
