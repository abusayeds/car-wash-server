import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";

import { subService } from "./subServise-servise";

const createSubServise = catchAsync(async (req, res) => {
  const result = await subService.createsubServiceDB(req?.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sub  Service created successfully",
    data: result,
  });
});

const getsingleSubService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await subService.singleubServiceDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single sub Service retrieved successfully",
    data: result,
  });
});
const getAllSubService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await subService.allServiceDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Sub Service retrieved successfully",
    data: result,
  });
});
export const subServicecontroller = {
  createSubServise,
  getsingleSubService,
  getAllSubService,
};
