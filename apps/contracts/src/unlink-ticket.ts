import { z } from "zod";
import { mutation } from ".";

export const unlinkTicket = mutation({
  method: 'DELETE',
  path: '/tickets/link',
  responses: {
    204: z.null(),
  },
  body: z.void(),
  summary: 'Unlink authenticated user ticket',
});