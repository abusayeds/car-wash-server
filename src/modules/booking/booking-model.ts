import { Schema, model } from "mongoose";
import { TBooking, TService, TSlot } from "./booking-interface";


const serviseSchema = new Schema <TService>({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    duration :{
        type : Number,
        required : true
    },
    isDeleted : {
        type : Boolean,
        required : true,
        default : false
    }
})
const slotSehema = new Schema<TSlot>({
    service : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        unique : true
    },
    startTime : {
        type : String,
        required : true
    },
    endTime : {
        type : String,
        required : true,
        unique: true
    },
    isBooked : {
        type : String,
        required : true,
        default : 'booked'
    }
})

const bookingSchema = new Schema<TBooking>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service : {
        type : serviseSchema,
        ref : "Servise",
        required : true
    },
    slot : {
        type : slotSehema,
        ref: "Slot",
        required  : true
    },
    serviceId: {
      type: Schema.Types.ObjectId,
     required: true,
     select : 0
    },
    slotId: {
      type: Schema.Types.ObjectId,
      select : 0,
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
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
    registrationPlate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const bookingModel = model<TBooking>("Booking", bookingSchema);