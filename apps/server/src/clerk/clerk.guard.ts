import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ClerkService } from './clerk.service'

@Injectable()
export class ClerkAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly clerkService: ClerkService) {
    super()
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    const authToken = request.headers.authorization
      ? request.headers.authorization.replace('Bearer ', '')
      : request.headers.authorization

    if (!authToken) {
      return false
    }

    const user = await this.clerkService.authenticateUser(authToken)

    if (!user) {
      return false
    }

    request.user = user
    return true
  }
}
