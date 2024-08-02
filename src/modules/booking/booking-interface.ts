import { Types } from "mongoose";


 export interface TService {
  name : string,
  description : string
  price : number
  duration : number
  isDeleted : boolean
}
 export interface TSlot {
  service : string,
  date : string
  startTime: string
  endTime: string
  isBooked: string
}

 export type TBooking = {
  customer : Types.ObjectId;
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  service : TService
  slot : TSlot
  vehicleType:
    | "car"
    | "truck"
    | "SUV"
    | "van"
    | "motorcycle"
    | "electricVehicle"
    | "hybridVehicle"
    | " bicycle"
    | "tractor";
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
