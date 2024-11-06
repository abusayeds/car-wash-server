import { Router } from "express";
import requestValidation from "../../app/middwares/validation-request";

import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";
import { subServiceValidation } from "./subServise-validation";
import { subServicecontroller } from "./subServise-controller";

const router = Router();
router.post(
  "/sub-services",
  auth(USER_ROLE.admin),
  requestValidation(subServiceValidation.createSubServiceValidation),
  subServicecontroller.createSubServise
);

router.get("/all/sub-services/:id", subServicecontroller.getAllSubService);

router.get(
  "/single-sub-services/:id",
  subServicecontroller.getsingleSubService
);

export const SubserviceRoutes = router;
