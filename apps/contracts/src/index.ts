import { initContract } from '@ts-rest/core';

import { linkTicket } from './link-ticket';
import { unlinkTicket } from './unlink-ticket';
import { myTicket } from './my-ticket';
 
export const { mutation, query, router } = initContract();

export const contract = router({
  linkTicket,
  myTicket,
  unlinkTicket,
})