import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from '../../entities/dto/create-cat-dto';
import { Cat } from '../../entities/interfaces/cat.interfaces';

@Injectable()
export class CatsUseCase {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec();
    }
}
