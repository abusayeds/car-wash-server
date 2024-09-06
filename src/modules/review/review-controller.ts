import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { reviewServise } from "./review-servise";

const createReview = catchAsync(async (req, res) => {
  const result = await reviewServise.createReviewDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Feedback sending ...",
    data: result,
  });
});
const getAllReview = catchAsync(async (req, res) => {
  const result = await reviewServise.getAllReviewDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Review Retrieved Ruccessfully",
    data: result,
  });
});
const getLastTwoReview = catchAsync(async (req, res) => {
  const result = await reviewServise.getLastTwoReviewDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Last to Review Retrieved Ruccessfully",
    data: result,
  });
});
export const reviewController = {
  createReview,
  getAllReview,
  getLastTwoReview,
};
