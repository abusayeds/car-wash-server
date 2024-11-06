import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { reviewServise } from "./review-servise";

const createReview = catchAsync(async (req, res) => {
  const result = await reviewServise.createReviewDB(req.body, req?.user?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Feedback sending ...",
    data: result,
  });
});
const getAllReview = catchAsync(async (req, res) => {
  const result = await reviewServise.getAllReviewDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Review Retrieved successfully",
    data: result,
  });
});
const getLastTwoReview = catchAsync(async (req, res) => {
  const result = await reviewServise.getLastTwoReviewDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Last to Review Retrieved successfully",
    data: result,
  });
});
const getMyReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServise.getMyReviewDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "My Review Retrieved successfully",
    data: result,
  });
});
const singleReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServise.singleReviewDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Review Retrieved successfully",
    data: result,
  });
});
const deleteReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServise.deleteReviewDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review deleted successfully",
    data: result,
  });
});
const updateReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServise.updateReviewDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review update successfully",
    data: result,
  });
});
export const reviewController = {
  createReview,
  getAllReview,
  getLastTwoReview,
  getMyReview,
  updateReview,
  deleteReview,
  singleReview,
};
