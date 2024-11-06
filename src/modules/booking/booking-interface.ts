import { Types } from "mongoose";

export type TBooking = {
  name: string;
  user: Types.ObjectId;
  service: Types.ObjectId;
  Subservice: Types.ObjectId;
  email: string;
  address: string;
  phone: string;
  price: number;
  image: string;
  slotId: string;
  date: string;
  time: string;
  startTime: string;
  endTime: string;
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
