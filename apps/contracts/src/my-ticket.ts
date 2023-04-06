import { z } from "zod";
import { query } from ".";
import { TicketSchema } from "./schemas/ticket";

export const myTicket = query({
  method: 'GET',
  path: '/tickets/link',
  responses: {
    200: z.object({
      ticket: TicketSchema,
    }),
  },
  summary: 'Get the authenticated user liked ticket',
});