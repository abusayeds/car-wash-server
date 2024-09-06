import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    role: z.enum(["admin", "user"]).optional(),
    address: z.string(),
  }),
});
const updateUserValidationSchema = z.object({
    body: z.object({
      name: z
        .string({ required_error: "Name is required" })
        .min(1, "Name cannot be empty"),
      email: z
        .string({ required_error: "Email is required" })
        .email("Please enter a valid email address")
        .min(1, "Email cannot be empty"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .optional(),
      phone: z
        .string({ required_error: "Phone number is required" })
        .min(10, "Phone number must be at least 10 digits long")
        .min(1, "Phone number cannot be empty"),
      role: z
        .enum(["admin", "user"], {
          errorMap: () => ({ message: "Role must be either 'admin' or 'user'" }),
        })
        .optional(),
      address: z
        .string({ required_error: "Address is required" })
        .min(1, "Address cannot be empty"),
    }),
  });
  
  

export const userValidation = {
  createUserValidationSchema,
  updateUserValidationSchema
};
