import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'
import { SymplaService } from './sympla/sympla.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, SymplaService],
})
export class AppModule {}
