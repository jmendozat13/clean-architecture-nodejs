import { Module } from '@nestjs/common';
import { WallvController } from './wallv.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WallvSchema } from '../../usecases/repository/schema/wallv.schema';
import { WallvUseCase } from '../../usecases/usecase/wallv.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Wallv', schema: WallvSchema }])],
  controllers: [WallvController],
  providers: [WallvUseCase],
})
export class WallvModule { }
