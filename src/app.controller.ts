import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
// import { AppService } from './app.service'; session only
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guards';
// import { AuthenticatedGuard } from './auth/authenticated.guard'; session only
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {} session only
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  // @UseGuards(AuthenticatedGuard) session only
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): any {
    return req.user;
  }
}
