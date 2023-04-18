import { PrismaService } from '@/database/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async getTicketByUserId(userId: string) {
    if (!userId) throw new Error('Missing userId on ticket service.')

    return await this.prisma.ticket.findUnique({
      where: {
        userId,
      },
    })
  }
}
