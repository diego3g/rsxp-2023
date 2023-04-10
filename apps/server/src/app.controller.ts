import { Controller, Get } from '@nestjs/common'
import { PrismaService } from '@/database/prisma.service'

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getUsers() {
    const users = await this.prisma.user.findMany()

    return {
      data: users,
    }
  }
}
