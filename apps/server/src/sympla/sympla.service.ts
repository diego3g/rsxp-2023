import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { z } from 'zod'

export interface ParticipantResponseError {
  error: boolean
  code: number
  message: string
}

@Injectable()
export class SymplaService {
  private symplaAPIClient: AxiosInstance

  constructor() {
    this.symplaAPIClient = axios.create({
      baseURL: 'https://api.sympla.com.br/public/v3',
      headers: {
        S_TOKEN: process.env.SYMPLA_TOKEN,
      },
    })
  }

  public async getParticipantByTicketNumber(ticketNumber: string) {
    const { data } = await this.symplaAPIClient.get(
      `/events/${process.env.SYMPLA_EVENT_ID}/participants/ticketNumber/${ticketNumber}`,
    )

    const participantSchema = z.object({
      id: z.number(),
      order_id: z.string(),
      order_status: z.string(),
      order_date: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      email: z.string().email(),
      ticket_number: z.string(),
      ticket_num_qr_code: z.string(),
    })

    return participantSchema.parse(data.data)
  }
}
