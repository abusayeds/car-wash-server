import { z } from "zod";

const bookingVAlidationSchema = z.object({
  body: z.object({
    name: z.string(),
    service: z.string(),
    Subservice: z.string(),
    phone: z.string(),
    email: z.string().email("Invalid email address"),
    price: z.number(),
    image: z.string(),
    date: z.string(),
    slotId: z.string(),
    time: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    address: z.string(),
    vehicleType: z.string(),
    vehicleBrand: z.string(),
  }),
});

export const bookingValidation = {
  bookingVAlidationSchema,
};
