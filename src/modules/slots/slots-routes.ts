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
router.put("/update-slot/:id", slotsController.updateSlot);
router.get("/services-slots/:id", slotsController.getServiseIdSlots);
router.get("/single-slot/:id", slotsController.getSingleSlot);
router.delete("/delete-slot/:id", slotsController.deleteSlot);
router.get("/slots/availability", slotsController.getAvailableSlot);
export const slotsRouts = router;
