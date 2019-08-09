import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userUseCase } from '../../../usecases/usecase/user.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../../../usecases/repository/schema/user.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: userSchema }])],
    controllers: [UserController],
    providers: [userUseCase],
    exports: [userUseCase]
})
export class UserModule {}
