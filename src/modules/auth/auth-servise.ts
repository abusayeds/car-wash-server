import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { userModel } from "../user/user-model";
import { TLoginUser } from "./auth-interface";

import config from "../../app/config";
import { createToken } from "./auth-utils";

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
    name: user.name,
    userEmail: user.email,
    role: user.role,
    user :user
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );
  
  return {
    accessToken,
    refreshToken,
    user,
  };
};
export const authServise = {
  createAuthDB,
};
