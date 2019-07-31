import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';
import { CreateKendalDto } from '../../entities/dto/kendal.dto';

@Injectable()
export class KendalUseCase {
    constructor(@InjectModel('Kendal') private readonly wallvModel: Model<IKendal>) { }
    async create(createKendalDto: CreateKendalDto): Promise<IKendal> {
        const createKendal = new this.wallvModel(createKendalDto);
        return await createKendal.save();
    }

    async findAll(): Promise<IKendal[]> {
        return await this.wallvModel.find().exec();
    }
}
