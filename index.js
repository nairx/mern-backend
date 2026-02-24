import express from "express";
import dbConnect from "./config/db.js";
import cors from "cors"
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
const app = express();
app.use(cors())
const startServer = async () => {
  await dbConnect();
  app.listen(8080, () => console.log("Server started"));
};
startServer();
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

