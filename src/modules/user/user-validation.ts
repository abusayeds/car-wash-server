import { z } from "zod";

const userNameSchema = z.object({
    firstName: z.string(),
    middleName: z.string().optional(),
    lastName: z.string(),
  });
  const createUserValidationSchema = z.object({
  body : z.object({
    name: userNameSchema,
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    role: z.enum(["admin", "user"]),
    address: z.string(),
  })
  });
  
   export const userValidation = {
    createUserValidationSchema
   }