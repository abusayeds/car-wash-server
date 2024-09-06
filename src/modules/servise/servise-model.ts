import { model, Schema } from "mongoose";
import { TServise } from "./servise-interface";

const serviseSchema = new Schema<TServise>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    image : {
        type : String,
        required : true
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const serviseModel = model<TServise>("Servise", serviseSchema);
