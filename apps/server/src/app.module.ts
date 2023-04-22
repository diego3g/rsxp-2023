import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { z } from 'zod'
import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'
import { SymplaService } from './sympla/sympla.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (config) => {
        const envSchema = z.object({
          DATABASE_URL: z.string(),
          CLERK_SECRET_KEY: z.string(),
          SYMPLA_TOKEN: z.string(),
          SYMPLA_EVENT_ID: z.string(),
          THROTTLE_TTL: z.string(),
          THROTTLE_LIMIT: z.string(),
        })

        return envSchema.parse(config)
      },
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('THROTTLE_TTL'),
        limit: config.get('THROTTLE_LIMIT'),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    PrismaService,
    SymplaService,
  ],
})
export class AppModule {}
