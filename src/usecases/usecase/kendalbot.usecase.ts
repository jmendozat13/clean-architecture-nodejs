import { Injectable } from '@nestjs/common';
import { KendalBotResponse } from '../../entities/entity/kendalbot.entity';
import { KendalBotDto } from '../../entities/dto/kendalbot.dto';
import { KendalBotRepository } from '../repository/kendalbot.repository';

@Injectable()
export class KendalBotUseCase {
    constructor(private kendalbotrepository: KendalBotRepository) { }

    async chatBot(kendalBotDto: KendalBotDto): Promise<KendalBotResponse> {
        return await this.kendalbotrepository.chatBot(kendalBotDto);
    }
}
