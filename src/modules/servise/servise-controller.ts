import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { Servise } from "./servise-servise";

const createServise = catchAsync(async (req, res) => {
  const result = await Servise.createServiseDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

const getAllService = catchAsync(async (req, res) => {
  const result = await Servise.getAllServiceDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " All Service retrieved successfully",
    data: result,
  });
});
const getsSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await Servise.getSingleServiceDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully",
    data: result,
  });
});
const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await Servise.updateSErviseDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated successfully",
    data: result,
  });
});
const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await Servise.deleteServiseDB(id,);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service Deleted successfully",
    data: result,
  });
});
export const serviseController = {
  createServise,
  getAllService,
  getsSingleService,
  updateService,
  deleteService
};
