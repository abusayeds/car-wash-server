import { Types } from "mongoose";
export type TSubService = {
  service: Types.ObjectId;
  SubServiceName: string;
  price: number;
  images: string;
};
