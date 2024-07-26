import { Router } from "express";
import { userRoutes } from "../modules/user/user-routes";
import { serviceRoutes } from "../modules/servise/servise-routes";

const router = Router();
router.use("/api/auth", userRoutes);
router.use("/api/services", serviceRoutes);

export default router;
