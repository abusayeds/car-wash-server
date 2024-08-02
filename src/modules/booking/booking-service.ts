/* eslint-disable @typescript-eslint/no-explicit-any */

import { slotModel } from "../slots/slots-model";
import { TBooking } from "./booking-interface";
import { bookingModel } from "./booking-model";

const createBookingDB = async (payload: TBooking, customer: any) => {
  const slot = await slotModel.findById(payload.slotId);
  const booking = await bookingModel.create({
    ...payload,
    customer: customer,
  });

  slot!.isBooked = "booked";
  await slot!.save();

  return bookingModel
    .findById(booking._id)
    .populate({
      path: "customer",
      select: "name email phone address", 
    })
    .populate("serviceId")
    .populate("slotId");
};
const getAllBookingDB = async () => {
    const result = await bookingModel.find()
    
    
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
