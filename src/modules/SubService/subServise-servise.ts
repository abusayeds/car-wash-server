import { TSubService } from "./subServise-interface";
import { subServiseModel } from "./subServise-modal";

const createsubServiceDB = async (payload: TSubService) => {
  const result = await subServiseModel.create(payload);
  return result;
};
const allServiceDB = async (id: string) => {
  const result = await subServiseModel.find({ service: id });
  return result;
};
const singleubServiceDB = async (id: string) => {
  const result = await subServiseModel.findById(id);
  return result;
};

export const subService = {
  createsubServiceDB,
  singleubServiceDB,
  allServiceDB,
};
