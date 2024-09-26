import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { bookingService } from "./booking-service";

const createbooking = catchAsync(async (req, res) => {
  const result = await bookingService.createBookingDB(req.body, req.user.id);

    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Booking successful",
    data: result,
  });
});
const getAllBooking = catchAsync(async (req, res) => {
  const result = await bookingService.getAllBookingDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: result,
  });
});
const getMyBooking = catchAsync(async (req, res) => {
  const result = await bookingService.getMybookingDB(req.user.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User bookings retrieved successfully",
    data: result,
  });
});
export const bookingController = {
  createbooking,
  getAllBooking,
  getMyBooking,
};
