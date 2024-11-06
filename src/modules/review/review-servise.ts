import queryBuilder from "../../app/builder/queryBuilder";
import { TReview } from "./review-interface";
import { reviewModel } from "./review-modal";

const createReviewDB = async (payload: TReview, id: string) => {
  const result = await reviewModel.create({
    ...payload,
    user: id,
  });
  return result;
};
// const getAllReviewDB = async () => {
//   const result = await reviewModel
//     .find()
//     .pagenate()
//     .sort({ createdAt: -1 })
//     .populate("user");
//   return result;
// };
const getAllReviewDB = async (query: Record<string, unknown>) => {
  const serviseQuery = new queryBuilder(
    reviewModel.find().populate("user"),
    query
  )

    .sort()
    .pagenate();

  const result = await serviseQuery.modelQuery;
  return result;
};
const getLastTwoReviewDB = async () => {
  const result = await reviewModel
    .find()
    .populate("user")
    .sort({ createdAt: -1 })
    .limit(3)
    .exec();
  return result;
};
const getMyReviewDB = async (id: string) => {
  const result = await reviewModel.find({ user: id }).populate("user");
  return result;
};
const singleReviewDB = async (id: string) => {
  const result = await reviewModel.findById(id);
  return result;
};
const updateReviewDB = async (id: string, payload: TReview) => {
  const result = await reviewModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteReviewDB = async (id: string) => {
  const result = await reviewModel.findByIdAndDelete({ _id: id });
  return result;
};
export const reviewServise = {
  createReviewDB,
  getAllReviewDB,
  getLastTwoReviewDB,
  getMyReviewDB,
  updateReviewDB,
  deleteReviewDB,
  singleReviewDB,
};
