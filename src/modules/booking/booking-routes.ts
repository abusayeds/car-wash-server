import { Router } from "express";
import { bookingController } from "./booking-controller";
import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";
import requestValidation from "../../app/middwares/validation-request";
import { bookingValidation } from "./booking-validation";

const router = Router();

router.post(
  "/bookings",
  auth(USER_ROLE.user),
  requestValidation(bookingValidation.bookingVAlidationSchema),
  bookingController.createbooking
);
router.get("/bookings", auth(USER_ROLE.admin), bookingController.getAllBooking);
router.get(
  "/my-bookings",
  auth(USER_ROLE.user),
  bookingController.getMyBooking
);
router.delete(
  "/delete-booking/:id",
  auth(USER_ROLE.user),
  bookingController.deleteBooking
);

export const bookingRouts = router;
