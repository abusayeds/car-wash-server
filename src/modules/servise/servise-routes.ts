import { Router } from "express";
import requestValidation from "../../app/middwares/validation-request";
import { servisreValidation } from "./servise-validation";
import { serviseController } from "./servise-controller";
import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();
router.post(
  "/",
  auth(USER_ROLE.admin),
  requestValidation(servisreValidation.createServiseValidationSchema),
  serviseController.createServise
);
router.get("/", serviseController.getAllService);
router.get("/:id", serviseController.getsSingleService);


export const serviceRoutes = router;
