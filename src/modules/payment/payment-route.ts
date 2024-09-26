import { Router } from "express";
import { paymentController } from "./payment-controller";

const router = Router();
router.post('/confirmation', paymentController.confirmationController)
router.post('/failed', paymentController.failedController)
export const paymentRoutes = router;
