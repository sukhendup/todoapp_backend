import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
export const isAunthicated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login First",
    });
  }
  const decoded = jwt.verify(token, process.env.jwt_secret);
  req.user = await User.findById(decoded._id);
  next();
};
