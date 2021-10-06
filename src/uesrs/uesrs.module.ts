import { Module } from '@nestjs/common';
import { UesrsService } from './uesrs.service';

@Module({
  providers: [UesrsService],
  exports: [UesrsService]
})
export class UesrsModule {}
