import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppUseCase } from './usecases/usecase/app.usecase';
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
  controllers: [AppController, CatsController],
  providers: [AppUseCase, CatsUseCase],
})
export class AppModule { }
