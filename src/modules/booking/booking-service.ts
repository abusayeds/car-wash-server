/* eslint-disable @typescript-eslint/no-explicit-any */

import { TBooking } from "./booking-interface";
import { bookingModel } from "./booking-model";

const createBookingDB = async (payload: TBooking, id: string) => {
  // console.log(id);

  const result = await bookingModel.create({
    ...payload,
    user: id,
  });

  return result;
};
const getAllBookingDB = async () => {
  const result = await bookingModel.find().populate('user');
  return result;
};
const getMybookingDB = async (id: string) => {
  const result = await bookingModel.find({ user : id });
  return result;
};
export const bookingService = {
  createBookingDB,
  getAllBookingDB,
  getMybookingDB,
};
