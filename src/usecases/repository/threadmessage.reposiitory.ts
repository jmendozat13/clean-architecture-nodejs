import { ThreadMessageDto } from '../../entities/dto/threadmessage.dto';

export abstract class ThreadMessageRepository {
    abstract addThreadToHistoryMessage(threadMessageDto: ThreadMessageDto): Promise<boolean>;
}
