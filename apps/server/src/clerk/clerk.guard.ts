import { RequireAuthProp } from '@clerk/clerk-sdk-node'
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class ClerkGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: RequireAuthProp<Request> = context
      .switchToHttp()
      .getRequest()
    if (request.auth.userId) {
      return true
    } else {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    }
  }
}
