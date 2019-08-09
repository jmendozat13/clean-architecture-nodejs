import { Module } from '@nestjs/common';
import { KendalController } from './kendal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KendalSchema } from '../../data/mongodb/schema/kendal.schema';
import { KendalUseCase } from '../../usecases/usecase/kendal.usecase';
import { KendalbotController } from './kendalbot/kendalbot.controller';
import { KendalBotUseCase } from '../../usecases/usecase/kendalbot.usecase';
import { KendalRepository } from '../../usecases/repository/kendal.repository';
import { KendalMongoDB } from '../../data/mongodb/kendal.mongodb';
import { KendalBotRepository } from '../../usecases/repository/kendalbot.repository';
import { KendalBotMongoDB } from '../../data/mongodb/kendalbot.mongodb';
import { HistorymessageController } from './historymessage/historymessage.controller';
import { ThreadmessageController } from './threadmessage/threadmessage.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kendal', schema: KendalSchema }])],
  controllers: [KendalController,
    KendalbotController,
    HistorymessageController,
    ThreadmessageController],
  providers: [
    KendalUseCase,
    KendalBotUseCase,
    { provide: KendalRepository, useClass: KendalMongoDB },
    { provide: KendalBotRepository, useClass: KendalBotMongoDB }],
})
export class KendalModule { }
