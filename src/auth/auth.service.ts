import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UesrsService } from 'src/uesrs/uesrs.service';

@Injectable()
export class AuthService {
  constructor(
    private userservice: UesrsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userservice.findOne(username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token:this.jwtService.sign(payload),
    };
  }
}
