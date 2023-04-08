import { Injectable } from '@nestjs/common'
import clerkClient, { Clerk } from '@clerk/clerk-sdk-node'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ClerkService {
  private readonly clerk: typeof clerkClient

  constructor(private readonly configService: ConfigService) {
    this.clerk = Clerk({
      secretKey: this.configService.get('CLERK_SECRET_KEY'),
    })
  }

  async authenticateUser(authToken: string) {
    try {
      const session = await this.clerk.clients.verifyClient(authToken)
      return session
    } catch (error) {
      return null
    }
  }
}
