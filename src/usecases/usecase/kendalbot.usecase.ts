import { Injectable } from '@nestjs/common';
import { KendalBotResponse } from '../../entities/entity/kendalbot.entity';
import { KendalBotDto } from '../../entities/dto/kendalbot.dto';
import { KendalBotRepository } from '../repository/kendalbot.repository';
import { HistoryMessageRepository } from '../repository/historymessage.repository';
import { ThreadMessageRepository } from '../repository/threadmessage.reposiitory';
import { HeaderKendalBotDto } from '../../entities/dto/headerkendalbot.dto';
import { HistoryMessageDto } from '../../entities/dto/historymessage.dto';
import { ThreadMessageDto } from '../../entities/dto/threadmessage.dto';

@Injectable()
export class KendalBotUseCase {
    constructor(
        private kendalbotrepository: KendalBotRepository,
        private historyrepository: HistoryMessageRepository,
        private threadrepository: ThreadMessageRepository) { }

    async chatBot(headerkendalbot: HeaderKendalBotDto, kendalBotDto: KendalBotDto): Promise<KendalBotResponse> {
        let historyMessage = await this.historyrepository.findBy(headerkendalbot);
        if (historyMessage == null) {
            const historymessagedto = new HistoryMessageDto(headerkendalbot.ip,
                headerkendalbot.device,
                headerkendalbot.aditionalInfo,
                headerkendalbot.username);
            historyMessage = await this.historyrepository.initHistoryMessage(historymessagedto);
        }
        const threadinputmessage = new ThreadMessageDto(kendalBotDto.inputmessage,
            'jmendoto',
            historyMessage._id,
            'input');
        await this.threadrepository.addThreadToHistoryMessage(threadinputmessage);
        const kendalbot =  await this.kendalbotrepository.chatBot(kendalBotDto);
        const threadoutputmessage = new ThreadMessageDto(kendalbot.outputmessage,
            'kendal',
            historyMessage._id,
            'output');
        await this.threadrepository.addThreadToHistoryMessage(threadoutputmessage);
        return kendalbot;
    }
}
