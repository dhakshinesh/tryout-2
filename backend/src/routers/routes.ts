import { Router } from "express";
import { loginUser } from "../controllers/authController";
import { getUser } from "../controllers/authController";
import { updateUser } from "../controllers/authController";
import { deleteUser } from "../controllers/authController";

const router = Router();

router.post("/api/register", loginUser);
router.get("/api/get",getUser);
router.put("/api/update/:id",updateUser);
router.delete("/api/delete/:id",deleteUser);

export default router;