import { Module } from '@nestjs/common';
import { HistorymessageController } from './historymessage.controller';

@Module({
  controllers: [HistorymessageController]
})
export class HistorymessageModule {}
