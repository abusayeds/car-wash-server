import { Router } from "express";
import requestValidation from "../../app/middwares/validation-request";
import { reviewValidation } from "./review-validation";
import { reviewController } from "./review-controller";

const router = Router();
router.post(
  "/create-review",
  requestValidation(reviewValidation.reviewValidationSchema),
  reviewController.createReview
);
router.get("/get-review", reviewController.getAllReview);
router.get("/get-last-two-review", reviewController.getLastTwoReview);

export const reviewRoutes = router;
