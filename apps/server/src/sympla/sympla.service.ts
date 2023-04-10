import { Injectable } from '@nestjs/common'
import { symplaApi } from 'src/lib/axios'
import { Participant } from './sympla.dto'

export interface ParticipantResponseSuccess {
  data: Participant
}

interface ParticipantResponseError {
  error: boolean
  code: number
  message: string
}

@Injectable()
export class SymplaService {
  public async getParticipantByTicketNumber(ticketNumber: number) {
    try {
      const { data } = await symplaApi.get<ParticipantResponseSuccess>(
        `/events/${process.env.SYMPLA_EVENT_ID}/participants/ticketNumber/${ticketNumber}`,
      )

      return data.data
    } catch (error) {
      return error.response.data as ParticipantResponseError
    }
  }
}
