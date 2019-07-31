import { Module } from '@nestjs/common';
import { MessagethreadController } from './messagethread.controller';

@Module({
    controllers: [MessagethreadController],
})
export class MessagethreadModule { }
