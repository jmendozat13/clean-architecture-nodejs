import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { WallvModule } from './wallv/wallv.module';
import { MessagehistoryModule } from './messagehistory/messagehistory.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION, { useNewUrlParser: true }),
    CatsModule,
    WallvModule,
    MessagehistoryModule,
  ],
})
export class AppModule { }
