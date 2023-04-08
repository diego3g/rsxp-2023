import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { PrismaService } from './database/prisma.service'
import { ClerkAuthGuard } from './clerk/clerk.guard'
import { RequestWithUser } from './clerk/requestInterface.dto'

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

  @Get('/test-clerk-auth-guard')
  @UseGuards(ClerkAuthGuard)
  async get(@Req() req: RequestWithUser) {
    return {
      data: req.user,
    }
  }
}
