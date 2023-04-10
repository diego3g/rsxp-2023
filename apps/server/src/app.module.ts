import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
