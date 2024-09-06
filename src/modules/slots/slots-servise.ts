/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { serviseModel } from "../servise/servise-model";
import { TSlots } from "./slots-interface";
import { slotModel } from "./slots-model";

const createslotsDB = async (payload: TSlots) => {
  const slots: TSlots[] = [];
  const service = await serviseModel.findById(payload.service);
  const serviceDurationTime = Number(service?.duration);

  const startMinutes = convertToMinutes(payload.startTime);
  const endMinutes = convertToMinutes(payload.endTime);

  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = totalDuration / serviceDurationTime;

  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartTime = convertToTime(startMinutes + i * serviceDurationTime);
    const slotEndTime = convertToTime(
      startMinutes + (i + 1) * serviceDurationTime
    );

    const slot = {
      service: payload.service,
      date: new Date(payload.date),
      startTime: slotStartTime,
      endTime: slotEndTime,
      isBooked: payload.isBooked,
    };

    const result = await slotModel.create(slot);

    slots.push(result);
  }

  return slots;
};
const getAvailableSlotsDB = async () => {
  const result = await slotModel.find().populate("service");
  return result;
};
const convertToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const convertToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${mins}`;
};
const getServiseIdSlotsDB = async (id: any) => {
  const result = await slotModel.find({ service: id });
  return result;
};
const getSingleSlotDB = async (id: any) => {
  const result = await slotModel.findById({ _id: id }).populate('service')
  return result;
};
const deleteSlotDB = async (id: any) => {
  const result = await slotModel.findByIdAndDelete({ _id: id })
  return result;
};
const updateSloteDB = async (id: string, payload: TSlots) => {
  const booked = await slotModel.findById({ _id: id });

  if (booked?.isBooked === "booked") {
    throw new appError(httpStatus.BAD_REQUEST, "This slot is alredy booked ! ");
  }
  const result = await slotModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  
  
  return result;
};

export const slotsServise = {
  createslotsDB,
  getAvailableSlotsDB,
  getServiseIdSlotsDB,
  getSingleSlotDB,
  updateSloteDB,
  deleteSlotDB
};
