import { z } from "zod";

const reviewValidationSchema = z.object({
  body: z.object({
    description: z.string().min(1, "Description is required"),
    title: z.string().min(1, " title is required"),
    rating: z
      .number()
      .min(0, "Rating must be at least 0")
      .max(5, "Rating must be at most 5"),
  }),
});
const updatereviewValidationSchema = z.object({
  body: z.object({
    description: z.string().min(1, "Description is required").optional(),
    title: z.string().min(1, " title is required").optional(),
    rating: z
      .number()
      .min(0, "Rating must be at least 0")
      .max(5, "Rating must be at most 5")
      .optional(),
  }),
});
export const reviewValidation = {
  reviewValidationSchema,
  updatereviewValidationSchema,
};
