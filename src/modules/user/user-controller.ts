import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { userServise } from "./user-servise";

const createUser = catchAsync(async (req, res) => {
    // console.log('test', req.user);
    const result = await userServise.createUserDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User registered successfully",
        data: result,
    })
})
 export const userController = {
    createUser
}