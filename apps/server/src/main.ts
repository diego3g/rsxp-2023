import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'
import { Logger } from '@nestjs/common'
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  })

  app.use(helmet())
  app.use(ClerkExpressWithAuth())

  await app.listen(3333)

  const logger = new Logger(AppModule.name)
  logger.log(`🤖 Server is running on ${await app.getUrl()}`)
}

bootstrap()
