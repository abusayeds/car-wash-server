import { z } from "zod";

const bookingVAlidationSchema = z.object({
  body: z.object({
    name: z.string(),
    // user: z.string(),
    phone: z.number(),
    email: z.string().email("Invalid email address"),
    price : z.number(),
    image : z.string(),
    date: z.string(),
    time: z.string(),
    address: z.string(),
    city: z.string(),
    vehicleType: z.string(),
    vehicleBrand: z.string(),
  }),
});

export const bookingValidation = {
  bookingVAlidationSchema,
};
