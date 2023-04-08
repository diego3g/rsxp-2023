import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { ClerkService } from './clerk/clerk.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PrismaService, ClerkService],
})
export class AppModule {}
