import httpStatus from "http-status";
import { TUser } from "./user-interface";
import { userModel } from "./user-model";
import appError from "../../app/middwares/appError";

const createUserDB = async (payload: TUser) => {
  const isUserExists = await userModel.findOne({ email: payload?.email });

  if (isUserExists) {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "This user is alredy exists  ! "
    );
  }
  const result = await userModel.create(payload);
  return result;
};
export const userServise = {
  createUserDB,
};
