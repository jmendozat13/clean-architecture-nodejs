import { ThreadMessageDto } from '../../entities/dto/threadmessage.dto';
import { IThreadMessage } from '../../entities/interfaces/threadmessage.interfaces';

export abstract class ThreadMessageRepository {
    abstract addThreadToHistoryMessage(threadMessageDto: ThreadMessageDto): Promise<IThreadMessage>;
}
