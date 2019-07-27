import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './usecases/repository/schema/cat.schema';
import { CatsController } from './controllers/cats.controller';
import { CatsUseCase } from './usecases/usecase/cats.usecase';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION, { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  ],
  controllers: [CatsController],
  providers: [CatsUseCase],
})
export class AppModule { }
