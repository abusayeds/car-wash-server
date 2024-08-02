import { z } from "zod";

const bookingVAlidationSchema = z.object({
  body: z.object({
    customer: z.string().optional(),
    serviceId: z.string(),
    slotId: z.string(),
    vehicleType: z.string().min(1, "Vehicle type is required"),
    vehicleBrand: z.string().min(1, "Vehicle brand is required"),
    vehicleModel: z.string().min(1, "Vehicle model is required"),
    manufacturingYear: z
      .number()
      .int()
      .min(1886, "Invalid year")
      .max(new Date().getFullYear(), "Invalid year"),
    registrationPlate: z.string().min(1, "Registration plate is required"),               
  }),
});

export const bookingValidation = {
  bookingVAlidationSchema,
};
