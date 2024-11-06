import { model, Schema } from "mongoose";
import { TReview } from "./review-interface";

const reviewSchema = new Schema<TReview>(
  {
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const reviewModel = model<TReview>("review", reviewSchema);
