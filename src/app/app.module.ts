import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KendalModule } from './kendal/kendal.module';
import { MessagehistoryModule } from './messagehistory/messagehistory.module';
import { StatusController } from './status/status.controller';
import { MessagethreadModule } from './messagethread/messagethread.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION, { useNewUrlParser: true }),
    KendalModule,
    MessagehistoryModule,
    MessagethreadModule,
  ],
  controllers: [StatusController],
})
export class AppModule { }
