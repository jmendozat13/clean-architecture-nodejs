import { Module } from '@nestjs/common';
import { KendalController } from './kendal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KendalSchema } from '../../usecases/repository/schema/kendal.schema';
import { KendalUseCase } from '../../usecases/usecase/kendal.usecase';
import { KendalbotController } from './kendalbot/kendalbot.controller';
import { KendalBotUseCase } from '../../usecases/usecase/kendalbot.usecase';
import { HistorymessageModule } from './historymessage/historymessage.module';
import { ThreadmessageModule } from './threadmessage/threadmessage.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kendal', schema: KendalSchema }]),
    HistorymessageModule,
    ThreadmessageModule],
  controllers: [KendalController, KendalbotController],
  providers: [KendalUseCase, KendalBotUseCase],
})
export class KendalModule { }
