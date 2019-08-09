import { Model } from 'mongoose';
import { bcrypt } from 'mongoose-bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from '../../entities/interfaces/user.interfaces';
import { UserDto } from '../../entities/dto/user.dto';

@Injectable()
export class userUseCase {
    constructor(@InjectModel('user') private readonly userModel: Model<IUser>) { }

    async create(createUserDto: UserDto): Promise<IUser> {
        const createUser = new this.userModel(createUserDto);
        return await createUser.save();
    }

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find().exec();
    }
}