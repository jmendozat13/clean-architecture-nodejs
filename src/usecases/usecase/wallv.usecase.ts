import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IWallv } from '../../entities/interfaces/wallv.interfaces';
import { CreateWallvDto } from '../../entities/dto/wallv.dto';

@Injectable()
export class WallvUseCase {
    constructor(@InjectModel('Wallv') private readonly wallvModel: Model<IWallv>) { }
    async create(createWallvDto: CreateWallvDto): Promise<IWallv> {
        const createWallV = new this.wallvModel(createWallvDto);
        return await createWallV.save();
    }

    async findAll(): Promise<IWallv[]> {
        return await this.wallvModel.find().exec();
    }
}
