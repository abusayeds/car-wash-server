import { Schema, model } from "mongoose";
import { TBooking } from "./booking-interface";

const bookingSchema = new Schema<TBooking>(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
     ref: "User",
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    vehicleType: {
      type: String,
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const bookingModel = model<TBooking>("Booking", bookingSchema);
