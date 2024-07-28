import { Router } from "express";
import { userRoutes } from "../modules/user/user-routes";
import { serviceRoutes } from "../modules/servise/servise-routes";
import { slotsRouts } from "../modules/slots/slots-routes";
import { bookingRouts,  } from "../modules/booking/booking-routes";

const router = Router();
router.use("/api", userRoutes);
router.use("/api", serviceRoutes);
router.use("/api", slotsRouts);
router.use("/api", bookingRouts);


export default router;
