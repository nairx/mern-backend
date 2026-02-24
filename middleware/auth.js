import jwt from "jsonwebtoken";
const SECRET = "hello123"
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid Token" });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  };
};

export {authenticate,authorize}
