import { Module } from '@nestjs/common';
import { KendalController } from './kendal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KendalSchema } from '../../usecases/repository/schema/kendal.schema';
import { KendalUseCase } from '../../usecases/usecase/kendal.usecase';
import { KendalbotController } from './kendalbot/kendalbot.controller';
import { KendalBotUseCase } from '../../usecases/usecase/kendalbot.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kendal', schema: KendalSchema }])],
  controllers: [KendalController, KendalbotController],
  providers: [KendalUseCase, KendalBotUseCase],
})
export class KendalModule { }
