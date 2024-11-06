import { Router } from "express";
import requestValidation from "../../app/middwares/validation-request";
import { reviewValidation } from "./review-validation";
import { reviewController } from "./review-controller";
import { USER_ROLE } from "../user/user.constant";
import auth from "../../app/middwares/auth";

const router = Router();
router.post(
  "/create-review",
  auth(USER_ROLE.user),
  requestValidation(reviewValidation.reviewValidationSchema),
  reviewController.createReview
);
router.put(
  "/update-review/:id",
  auth(USER_ROLE.user),
  requestValidation(reviewValidation.updatereviewValidationSchema),
  reviewController.updateReview
);
router.get("/get-review", reviewController.getAllReview);
router.get("/get-last-two-review", reviewController.getLastTwoReview);
router.get("/my-review/:id", reviewController.getMyReview);
router.get("/single-review/:id", reviewController.singleReview);
router.delete("/delete-review/:id", reviewController.deleteReview);

export const reviewRoutes = router;
