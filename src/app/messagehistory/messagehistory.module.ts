import { Module } from '@nestjs/common';
import { MessagehistoryController } from './messagehistory.controller';

@Module({
  controllers: [MessagehistoryController],
})
export class MessagehistoryModule { }
