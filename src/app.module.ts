import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UesrsModule } from './uesrs/uesrs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UesrsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
