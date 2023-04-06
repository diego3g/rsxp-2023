import { Module } from '@nestjs/common'
import { TicketsController } from './tickets.controller'
import { PrismaService } from './database/prisma.service'

@Module({
  imports: [],
  controllers: [TicketsController],
  providers: [PrismaService],
})
export class AppModule {}
