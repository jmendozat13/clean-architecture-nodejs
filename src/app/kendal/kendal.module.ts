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
import { HistoryMessageMongoDB } from '../../data/mongodb/historymessage.mongodb';
import { HistoryMessageRepository } from '../../usecases/repository/historymessage.repository';
import { ThreadMessageRepository } from '../../usecases/repository/threadmessage.reposiitory';
import { ThreadMessageMongoDB } from '../../data/mongodb/threadmessage.mongodb';
import { HistoryMessageSchema } from '../../data/mongodb/schema/historymessage.schema';
import { ThreadMessageSchema } from '../../data/mongodb/schema/threadmessage.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kendal', schema: KendalSchema },
  { name: 'HistoryMessage', schema: HistoryMessageSchema },
  { name: 'ThreadMessage', schema: ThreadMessageSchema }])],
  controllers: [KendalController,
    KendalbotController,
    HistorymessageController,
    ThreadmessageController],
  providers: [
    KendalUseCase,
    KendalBotUseCase,
    { provide: KendalRepository, useClass: KendalMongoDB },
    { provide: KendalBotRepository, useClass: KendalBotMongoDB},
    { provide: HistoryMessageRepository, useClass: HistoryMessageMongoDB },
    { provide: ThreadMessageRepository, useClass: ThreadMessageMongoDB }],
})
export class KendalModule { }
