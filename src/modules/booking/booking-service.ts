/* eslint-disable @typescript-eslint/no-explicit-any */

import { initiatePayment } from "../payment/payment.utils";
import { TBooking } from "./booking-interface";
import { bookingModel } from "./booking-model";

const createBookingDB = async (payload: TBooking, id: string) => {
  const transactionId = `TNX-${Date.now()}`;
  const result = await bookingModel.create({
    ...payload,
    user: id,
  });
  const paymentData = {
    slotId: payload.slotId,
    transactionId,
    totalPrice: Number(payload?.price),
    custormerName: payload?.name,
    custormerEmail: payload?.email,
    custormerPhone: payload?.phone,
    custormerAddress: payload?.address,
  };
  const paymentSession = await initiatePayment(paymentData);
  return {
    result,
    paymentSession,
  };
};
const getAllBookingDB = async () => {
  const result = await bookingModel.find().populate("user");
  return result;
};
const deleteBookingDB = async (id: string) => {
  const result = await bookingModel.findByIdAndDelete(id);
  return result;
};
const getMybookingDB = async (id: string) => {
  const result = await bookingModel
    .find({ user: id })
    .populate("Subservice")
    .populate("service");
  return result;
};
export const bookingService = {
  createBookingDB,
  getAllBookingDB,
  getMybookingDB,
  deleteBookingDB,
};
