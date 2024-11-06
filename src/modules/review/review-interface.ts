import { Types } from "mongoose";

export type TReview = {
  description: string;
  title: string;
  user: Types.ObjectId;
  rating: number;
};
