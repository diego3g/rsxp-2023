import { PrismaService } from '@/database/prisma.service'
import {
  ParticipantResponseError,
  SymplaService,
} from '@/sympla/sympla.service'
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Ticket } from '@prisma/client'

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService, private sympla: SymplaService) {}

  async getTicketByUserId(userId: string) {
    if (!userId)
      throw new UnauthorizedException('Not authenticated!', {
        cause: new Error(),
        description: 'You need to be authenticated to access this route',
      })

    return await this.prisma.ticket.findUnique({
      where: {
        userId,
      },
    })
  }

  async deleteTicketByUserId(userId: string) {
    if (!userId)
      throw new UnauthorizedException('Not authenticated!', {
        cause: new Error(),
        description: 'You need to be authenticated to access this route',
      })

    return await this.prisma.ticket.delete({
      where: {
        userId,
      },
    })
  }

  async vinculateTicketByUserId(userId: string, ticket: number) {
    if (!userId)
      throw new UnauthorizedException('Not authenticated!', {
        cause: new Error(),
        description: 'You need to be authenticated to access this route',
      })

    if (!userId)
      throw new BadRequestException('Missing ticket!', {
        cause: new Error(),
        description: 'You need to pass a ticket number.',
      })

    const TempTicket = ticket.toString()

    // verify if user dont have any ticket
    const userTicketOnDb: Ticket = await this.prisma.ticket.findFirst({
      where: {
        userId,
      },
    })

    if (userTicketOnDb)
      throw new UnauthorizedException('Already vinculated!', {
        cause: new Error(),
        description: 'You already had a ticket vinculated.',
      })

    // verify if ticket is not from any user
    const ticketOnDb: Ticket = await this.prisma.ticket.findFirst({
      where: {
        ticket: TempTicket,
      },
    })

    if (ticketOnDb)
      throw new UnauthorizedException('Already vinculated!', {
        cause: new Error(),
        description: 'This ticket already had a user vinculated.',
      })

    // validate ticket with sympla
    const SymplaResponse: ParticipantResponseError | any =
      await this.sympla.getParticipantByTicketNumber(ticket)

    if (SymplaResponse.error)
      throw new BadRequestException('Not Exists!', {
        cause: new Error(),
        description: 'This ticket not exists.',
      })

    return await this.prisma.ticket.create({
      data: {
        userId,
        ticket: TempTicket,
      },
    })
  }
}
