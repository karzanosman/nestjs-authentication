import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UesrsModule } from 'src/uesrs/uesrs.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
// import { SessionSerializer } from './session.serializer';

@Module({
  imports: [
    UesrsModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret', // shall be stored in env variable
      signOptions: { expiresIn: '30m' },
    }),
  ],
  // imports: [ PassportModule.register({ session: true })], session only
  providers: [AuthService, LocalStrategy, JwtStrategy],
  // providers: [ SessionSerializer], session only
  exports: [AuthService],
})
export class AuthModule {}
