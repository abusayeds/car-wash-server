import { z } from "zod";

const createSubServiceValidation = z.object({
  body: z.object({
    service: z.string().nonempty("service is required"),
    SubServiceName: z.string().nonempty("Sub-service name is required"),
    price: z.number().positive("Price must be a positive number"),
    images: z.string().nonempty("Image URL is required"),
  }),
});

export const subServiceValidation = {
  createSubServiceValidation,
};
