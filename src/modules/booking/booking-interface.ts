import { Types } from "mongoose";

export type TBooking = {
  name: string;
  user: Types.ObjectId;
  phone: number;
  price: number;
  image : string;
  email: string;
  date: string;
  time: string;
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
