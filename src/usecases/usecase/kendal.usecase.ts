import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';
import { ClassKendalDto } from '../../entities/dto/kendal.dto';

@Injectable()
export class KendalUseCase {
    constructor(@InjectModel('Kendal') private readonly kendalModel: Model<IKendal>) { }
    async create(createKendalDto: ClassKendalDto): Promise<IKendal> {
        const createKendal = new this.kendalModel(createKendalDto);
        return await createKendal.save();
    }

    async findAll(): Promise<IKendal[]> {
        return await this.kendalModel.find().exec();
    }

    async deleteById(id: string): Promise<string> {
        await this.kendalModel.deleteOne({_id: id});
        return 'Eliminado correctamente';
    }

    async update(id: string, updateKendalDto: ClassKendalDto): Promise<string> {
        await this.kendalModel.findByIdAndUpdate(id, updateKendalDto);
        return "Editado correctamente";
    }

}
