import { model, Schema } from "mongoose";
import { TSubService } from "./subServise-interface";

const subServiseSchema = new Schema<TSubService>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      ref: "Servise",
    },
    SubServiceName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    images: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const subServiseModel = model<TSubService>(
  "subServise",
  subServiseSchema
);
