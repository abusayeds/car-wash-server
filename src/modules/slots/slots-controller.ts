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
const getServiseIdSlots = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await slotsServise.getServiseIdSlotsDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service sercise slot svailable successfully",
      data: result,
    });
  });
const getSingleSlot = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await slotsServise.getSingleSlotDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get single slot successfully",
      data: result,
    });
  });
const deleteSlot = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await slotsServise.deleteSlotDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Slot deleted successfully",
      data: result,
    });
  });
  const updateSlot = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await slotsServise.updateSloteDB(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Slot updated successfully",
      data: result,
    });
  });

export const slotsController = {
  createSlotsController,
  getAvailableSlot,
  getServiseIdSlots,
  getSingleSlot,
  updateSlot,
  deleteSlot
};
