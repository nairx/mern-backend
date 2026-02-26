import express from "express";
import path from "path"
import dotenv from "dotenv"
import expressLayouts from "express-ejs-layouts";
import dbConnect from "./config/db.js";
import session  from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors"
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
const app = express();
dotenv.config()
app.set("view engine","ejs")
app.set("views", path.join(process.cwd(), "views"));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts)
app.set("layout","layout")
app.use(cors())
app.use(express.static("public"))
const startServer = async () => {
  await dbConnect();
  app.listen(8080, () => console.log("Server started"));
};
startServer();
app.use(express.json());

// Session
app.use(session({
  secret: "hello123",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/merndatabase"
  }),
  cookie: {
    maxAge: 1000 * 60 * 60,
    httpOnly: true
  }
}));

// Make session global in EJS
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});


app.use("/users", userRouter);
app.use("/products", productRouter);
app.get("/",(req,res)=>{
res.redirect("/users")
})

