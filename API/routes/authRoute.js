import express from "express";
import { signup } from "../conrollers/authControllers.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
