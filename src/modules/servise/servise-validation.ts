import { z } from "zod";

const createServiseValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.number(),
    image: z.string(),
    isDeleted: z.boolean().default(false),
  }),
});
const updateServiseValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    duration: z.number().optional(),
    image : z.string().optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});
export const servisreValidation = {
  createServiseValidationSchema,
  updateServiseValidationSchema,
};
