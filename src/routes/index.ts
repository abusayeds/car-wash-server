import { Router } from "express";
import { userRoutes } from "../modules/user/user-routes";
import { serviceRoutes } from "../modules/servise/servise-routes";
import { slotsRouts } from "../modules/slots/slots-routes";
import { bookingRouts } from "../modules/booking/booking-routes";
import { reviewRoutes } from "../modules/review/review-route";
import { paymentRoutes } from "../modules/payment/payment-route";
import { SubserviceRoutes } from "../modules/SubService/subServise-route";

const router = Router();
router.use("/api", userRoutes);
router.use("/api", serviceRoutes);
router.use("/api", slotsRouts);
router.use("/api", bookingRouts);
router.use("/api", reviewRoutes);
router.use("/api/payment", paymentRoutes);
router.use("/api", SubserviceRoutes);

export default router;
