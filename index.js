import express from "express";
import dbConnect from "./config/db.js";
import cors from "cors"
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const startServer = async () => {
  await dbConnect();
  app.listen(8080, () => console.log("Server started"));
};
startServer();
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);

