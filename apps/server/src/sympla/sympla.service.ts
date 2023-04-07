import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { SymplaTicketDTO } from './symplaTicket.dto'

@Injectable()
export class SymplaService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getGuestByTicketId(ticketId: string): Promise<SymplaTicketDTO> {
    if (!ticketId) {
      throw new Error('Missing ticket id on: getGuestByTicketId')
    }
    const response: any = this.httpService.axiosRef.get(
      `${this.configService.get(
        'SYMPLA_BASE_URL',
      )}/events/${this.configService.get(
        'SYMPLA_EVENT_ID',
      )}/participants/${ticketId}`,
      {
        headers: { 's-token': this.configService.get('SYMPLA_API_TOKEN') },
      },
    )

    return response.data.data
  }

  async getGuestByTicketNumber(ticketNumber: string): Promise<SymplaTicketDTO> {
    if (!ticketNumber) {
      throw new Error('Missing ticket number on: getGuestByTicketNumber')
    }
    const response: any = await this.httpService.axiosRef.get(
      `${this.configService.get(
        'SYMPLA_BASE_URL',
      )}/events/${this.configService.get(
        'SYMPLA_EVENT_ID',
      )}/participants/ticketNumber/${ticketNumber}`,
      {
        headers: { 's-token': this.configService.get('SYMPLA_API_TOKEN') },
      },
    )

    return response.data.data
  }
}
