import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatSchema } from '../../usecases/repository/schema/cat.schema';
import { CatsUseCase } from '../../usecases/usecase/cats.usecase';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
    controllers: [CatsController],
    providers: [CatsUseCase],
})
export class CatsModule { }
