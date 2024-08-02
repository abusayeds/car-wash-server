/* eslint-disable @typescript-eslint/no-explicit-any */

import { serviseModel } from "../servise/servise-model";
import { slotModel } from "../slots/slots-model";
import { TBooking } from "./booking-interface";
import { bookingModel } from "./booking-model";

const createBookingDB = async (payload: TBooking, customer: any) => {
  const slot = await slotModel.findById(payload.slotId).select(' service date startTime endTime',);
  const service = await serviseModel.findById(payload.serviceId).select(' name description price duration isDeleted')

  
  const booking = await bookingModel.create({
    ...payload,
    customer: customer,
    service: service,
    slot : slot
 });

//   slot!.isBooked = "booked";
//   await slot!.save();

  return bookingModel
    .findById(booking._id)
    .populate({
      path: "customer",
      select: "name email phone address", 
    })
    
};
const getAllBookingDB = async () => {
    const result = await bookingModel.find() .populate({
        path: "customer",
        select: "name email phone address", 
      })
    return result
}
const getMybookingDB = async (id :string) => {
    const result = await bookingModel.find({customer:id})
    return result
}
export const bookingService = {
  createBookingDB,
  getAllBookingDB,
  getMybookingDB
};
