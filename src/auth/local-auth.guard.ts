// import { ExecutionContext } from '@nestjs/common'; session only
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // session only
  //   async canActivate(context: ExecutionContext) {
  //     const result = (await super.canActivate(context)) as boolean;
  //     const request = context.switchToHttp().getRequest();
  //     await super.logIn(request);
  //     return result;
  //   }
}
