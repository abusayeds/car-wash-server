import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { authServise } from "./auth-servise";

const createAuth = catchAsync(async (req, res) => {
  const result = await authServise.createAuthDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully",
    token : result.accessToken,
    data: result.user,
  });
});
export const authController = {
  createAuth,
};
