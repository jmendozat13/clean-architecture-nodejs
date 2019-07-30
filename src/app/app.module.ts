import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WallvModule } from './wallv/wallv.module';
import { MessagehistoryModule } from './messagehistory/messagehistory.module';
import { StatusController } from './status/status.controller';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION, { useNewUrlParser: true }),
    WallvModule,
    MessagehistoryModule,
  ],
  controllers: [StatusController],
})
export class AppModule { }
