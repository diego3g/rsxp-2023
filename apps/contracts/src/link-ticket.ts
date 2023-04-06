import { z } from "zod";
import { mutation } from ".";
import { TicketSchema, symplaTicketNumber } from "./schemas/ticket";

export const linkTicket = mutation({
  method: 'POST',
  path: '/tickets/link',
  responses: {
    201: z.object({
      ticket: TicketSchema,
    }),
  },
  body: z.object({
    symplaTicketNumber,
  }),
  summary: 'Link a ticket to authenticate user',
});