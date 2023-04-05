import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from '@prisma-db/prisma.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule { }
