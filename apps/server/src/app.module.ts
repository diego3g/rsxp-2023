import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'
import { SymplaService } from './sympla/sympla.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PrismaService, SymplaService],
})
export class AppModule {}
