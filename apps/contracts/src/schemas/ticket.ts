import { z } from "zod";

export const symplaTicketNumber = z.string()
  .regex(/[A-Z0-9]{4}-[A-Z0-9]{2}-[A-Z0-9]{4}/)

export const TicketSchema = z.object({
  id: z.string().uuid(),
  symplaTicketNumber,
});