import express from "express";
import { Login, LogOut, Signup } from "../controller/auth.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", LogOut);

export default router;