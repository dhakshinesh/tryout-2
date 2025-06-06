const express = require('express');
import { Router } from "express";
import { loginUser } from "../controllers/authController";

const app = express();
const router = Router();


router.post("/api/register", loginUser);
export default router;