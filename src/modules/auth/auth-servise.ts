import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { userModel } from "../user/user-model";
import { TLoginUser } from "./auth-interface";
import jwt from "jsonwebtoken";
import config from "../../app/config";

 
const createAuthDB = async (payload: TLoginUser) => {
  const user = await userModel.isUserExistsByCustomEmail(payload?.email);
  //   checking the exixts user
  if (!user) {
    throw new appError(httpStatus.NOT_FOUND, "This user is not found  ! ");
  }

  // check the password
  if (!(await userModel.isPasswordMatched(payload?.password, user?.password))) {
    throw new appError(httpStatus.FORBIDDEN, "This pasword do not match ");
  }

  const jwtPayload = {
    id: user._id,
    userEmail: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(
    jwtPayload, config.jwt_access_secert as string,
    { expiresIn: '30d' }
  );
  return {
     accessToken,
     user
  };
};
export const authServise = {
  createAuthDB,
};
