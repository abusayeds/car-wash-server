import { Router } from "express";
import { slotsController } from "./slots-controller";
import requestValidation from "../../app/middwares/validation-request";
import { slotValidation } from "./slots-validation";
import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();

router.post(
  "/services/slots",
  auth(USER_ROLE.admin),
  requestValidation(slotValidation.createSlotValidation),
  slotsController.createSlotsController
);
router.get("/slots/availability", slotsController.getAvailableSlot);
export const slotsRouts = router;
