import { Module } from '@nestjs/common';
import { KendalController } from './kendal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KendalSchema } from '../../data/mongodb/schema/kendal.schema';
import { KendalUseCase } from '../../usecases/usecase/kendal.usecase';
import { KendalbotController } from './kendalbot/kendalbot.controller';
import { KendalBotUseCase } from '../../usecases/usecase/kendalbot.usecase';
import { HistorymessageModule } from './historymessage/historymessage.module';
import { ThreadmessageModule } from './threadmessage/threadmessage.module';
import { KendalRepository } from '../../usecases/repository/kendal.repository';
import { KendalMongoDB } from '../../data/mongodb/kendal.mongodb';
import { KendalBotRepository } from '../../usecases/repository/kendalbot.repository';
import { KendalBotMongoDB } from '../../data/mongodb/kendalbot.mongodb';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kendal', schema: KendalSchema }]),
    HistorymessageModule,
    ThreadmessageModule],
  controllers: [KendalController, KendalbotController],
  providers: [
    KendalUseCase,
    KendalBotUseCase,
    { provide: KendalRepository, useClass: KendalMongoDB },
    { provide: KendalBotRepository, useClass: KendalBotMongoDB }],
})
export class KendalModule { }
