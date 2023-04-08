import express from "express";
import { register, getMyProfile, login, logout } from "../controllers/user.js";
import { isAunthicated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAunthicated, getMyProfile);

export default router;
