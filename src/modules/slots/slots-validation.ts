import z from "zod";
const TimeStringSchema = z.string().refine(
    (time) => {
      const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      return regex.test(time);
    },
    {
      message: 'Invalid time formet , Expected "HH:MM" in 24 hours formet ',
    }
  );
const createSlotValidation = z.object({
  body: z.object({
    service: z.string(),
    date: z.string(),
    startTime: TimeStringSchema,
    endTime: TimeStringSchema,
    isBooked: z.string().default("available"),
  })
  .refine(
    (body) => {
      const start = new Date(`2002-12-28T${body.startTime}:00`);
      const end = new Date(`2002-12-28T${body.endTime}:00`);
      return end > start;
    },
    { message: `Start time should be before End tine  ` }
  ),

});


export const slotValidation = {
  createSlotValidation
};
