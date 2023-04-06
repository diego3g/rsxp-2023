import { z } from "zod";
import { mutation } from ".";

export const unlinkTicket = mutation({
  method: 'DELETE',
  path: '/tickets/link',
  responses: {
    204: z.void(),
  },
  body: z.void(),
  pathParams: z.object({
    id: z.string().uuid(),
  }),
  summary: 'Unlink authenticated user ticket',
});