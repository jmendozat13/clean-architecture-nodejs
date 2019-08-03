import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';
import { KendalBotResponse, KendalBotOption } from '../../entities/entity/kendalbot.entity';
import { KendalBotDto } from '../../entities/dto/kendalbot.dto';

@Injectable()
export class KendalBotUseCase {
    constructor(@InjectModel('Kendal') private readonly kendalModel: Model<IKendal>) { }

    async chatBot(kendalBotDto: KendalBotDto): Promise<KendalBotResponse> {
        const kendalbasic = await this.kendalModel
            .findOne({ input: kendalBotDto.inputmessage })
            .lean();
        if (kendalbasic) {
            const kendalresponse = new KendalBotResponse(kendalbasic.output);
            const options = await this.kendalModel.find({ parentid: kendalbasic._id });
            options.forEach(item => {
                kendalresponse.options.push(new KendalBotOption(item.title, item.input));
            });
            return kendalresponse;
        }
        return await new KendalBotResponse('No entiendo');
    }
}
