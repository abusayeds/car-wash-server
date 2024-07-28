import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { slotsServise } from "./slots-servise";

const createSlotsController = catchAsync(async (req, res) => {
  const result = await slotsServise.createslotsDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots created successfully",
    data: result,
  });
});
const getAvailableSlot = catchAsync(async (req, res) => {
  const result = await slotsServise.getAvailableSlotsDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

export const slotsController = {
  createSlotsController,
  getAvailableSlot,
};
