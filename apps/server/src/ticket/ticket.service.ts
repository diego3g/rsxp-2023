import { PrismaService } from '@/database/prisma.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

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
}
