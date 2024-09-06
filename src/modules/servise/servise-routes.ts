import { Router } from "express";
import requestValidation from "../../app/middwares/validation-request";
import { servisreValidation } from "./servise-validation";
import { serviseController } from "./servise-controller";
import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();
router.post(
  "/services",
  auth(USER_ROLE.admin),
  requestValidation(servisreValidation.createServiseValidationSchema),
  serviseController.createServise
);
router.put(
  "/services/:id",
  auth(USER_ROLE.admin ),
  requestValidation(servisreValidation.updateServiseValidationSchema),
  serviseController.updateService
);
router.get("/services/", serviseController.getAllService);
router.get("/services/:id", serviseController.getsSingleService);

router.delete("/services/:id", auth(USER_ROLE.admin), serviseController.deleteService);

export const serviceRoutes = router;
