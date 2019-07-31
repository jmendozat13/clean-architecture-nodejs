import { Module } from '@nestjs/common';
import { WallvController } from './kendal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KendalSchema } from '../../usecases/repository/schema/kendal.schema';
import { KendalUseCase } from '../../usecases/usecase/kendal.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kendal', schema: KendalSchema }])],
  controllers: [WallvController],
  providers: [KendalUseCase],
})
export class KendalModule { }
