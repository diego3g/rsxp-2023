import { Injectable } from '@nestjs/common'
import { symplaApi } from 'src/lib/axios'

export interface Participant {
  id: number
  order_id: string
  order_status: string
  order_date: string
  first_name: string
  last_name: string
  email: string
  ticket_number: string
  ticket_num_qr_code: string
}

export interface ParticipantSuccess {
  data: Participant
}

interface ParticipantError {
  error: boolean
  code: number
  message: string
}

type ParticipantResponse = ParticipantSuccess | ParticipantError

@Injectable()
export class SymplaService {
  public async getParticipantByTicketNumber(ticketNumber: number) {
    const { data } = await symplaApi.get<ParticipantResponse>(
      `/events/${process.env.SYMPLA_EVENT_ID}/participants/ticketNumber/${ticketNumber}`,
    )

    if ('error' in data) {
      throw new Error(`[Sympla service] ${data.message}`)
    }

    return { participant: data }
  }
}
