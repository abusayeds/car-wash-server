/* eslint-disable @typescript-eslint/no-explicit-any */
import { TServise } from "./servise-interface";
import { serviseModel } from "./servise-model";

const createServiseDB = async (payload: TServise) => {
  const result = await serviseModel.create(payload);
  return result;
};

const getSingleServiceDB = async (id: any) => {
  const result = await serviseModel.findById(id);
  return result;
};

const getAllServiceDB = async () => {
  const result = await serviseModel.find();
  return result;
};
const updateSErviseDB = async (id: string, payload: TServise) => {
  const result = await serviseModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteServiseDB = async (id: string) => {
  const result = await serviseModel.findByIdAndUpdate({ _id: id },  { isDeleted: true }, {new: true,});
  return result;
};

export const Servise = {
  createServiseDB,
  getSingleServiceDB,
  getAllServiceDB,
  updateSErviseDB,
  deleteServiseDB
};
