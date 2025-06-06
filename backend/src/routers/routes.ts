import { Router } from "express";
import { loginUser } from "../controllers/authController";
import { getUser } from "../controllers/authController"; 

const router = Router();

router.post("/api/register", loginUser);
router.get("/api/get",getUser);

export default router;