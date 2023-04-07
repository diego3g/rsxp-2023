import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { SymplaService } from './sympla/sympla.service';
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController],
  providers: [PrismaService, SymplaService],
})
export class AppModule {}
