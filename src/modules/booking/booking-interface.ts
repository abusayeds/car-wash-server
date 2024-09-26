import { Types } from "mongoose";

export type TBooking = {
  name: string;
  user: Types.ObjectId;
  phone: number;
  price: number;
  image: string;
  email: string;
  slotId: string;
  date: string;
  time: string;
  startTime: string;
  endTime: string;
  address: string;
  city: string;
  vehicleType:
    | "car"
    | "truck"
    | "SUV"
    | "van"
    | "motorcycle"
    | "electricVehicle"
    | "hybridVehicle"
    | "bicycle"
    | "tractor";
  vehicleBrand: string;
};
