import express from "express";
import requestValidation from "../../app/middwares/validation-request";
import { userValidation } from "./user-validation";
import { userController } from "./user-controller";
import { authValidation } from "../auth/auth-validation";
import { authController } from "../auth/auth-controller";

const router = express.Router();
router.post(
  "/auth/signup",
  requestValidation(userValidation.createUserValidationSchema),
  userController.createUser
);
router.post(
  "/auth/login",
  requestValidation(authValidation.createAuthValidationSchema),
  authController.createAuth
);

export const userRoutes = router;
