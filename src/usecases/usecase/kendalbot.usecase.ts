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
        return await new KendalBotResponse('Hola soy Kendal, el asistente virtual de la UNT. ' +
            'Mis creadores estan trabajando en mi para ser mas inteligente, dentro de poco te ofrecere la ayuda que necesitas.');
    }
}
