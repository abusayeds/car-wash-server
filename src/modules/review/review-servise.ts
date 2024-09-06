
import { TReview } from "./review-interface";
import { reviewModel } from "./review-modal";

const createReviewDB = async (payload: TReview) => {
  const result = await reviewModel.create(payload);
  return result;
};
const getAllReviewDB = async () => {
  const result = await reviewModel.find();
  return result;
};
const getLastTwoReviewDB = async () => {

  const result = await reviewModel.find().sort({ createdAt: -1 }).limit(2).exec();
  return result;
};
export const reviewServise = {
  createReviewDB,
  getAllReviewDB,
  getLastTwoReviewDB 
};
