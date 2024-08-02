import { Schema, model } from "mongoose";
import { TSlots } from "./slots-interface";

const slotSchema = new Schema<TSlots>(
  {
    service: { type: Schema.Types.ObjectId, ref: "Servise", required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isBooked: { type: String, default: "available", required : true},
  },
  { timestamps: true }
);

export const slotModel = model<TSlots>("Slot", slotSchema);
