import { Module } from '@nestjs/common';
import { ThreadmessageController } from './threadmessage.controller';

@Module({
  controllers: [ThreadmessageController]
})
export class ThreadmessageModule {}
