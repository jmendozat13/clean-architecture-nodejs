import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';
import { KendalBotResponse } from '../../entities/entity/kendalbot.entity';
import { KendalBotDto } from '../../entities/dto/kendalbot.dto';

@Injectable()
export class KendalBotUseCase {
    constructor(@InjectModel('Kendal') private readonly kendalModel: Model<IKendal>) { }

    async chatBot(kendalBotDto: KendalBotDto): Promise<KendalBotResponse> {
        return await new KendalBotResponse('Hola tarado!');
    }
}
