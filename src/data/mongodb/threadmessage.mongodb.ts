import { Model } from 'mongoose';
import { ThreadMessageRepository } from '../../usecases/repository/threadmessage.reposiitory';
import {ThreadMessageDto} from '../../entities/dto/threadmessage.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IThreadMessage } from '../../entities/interfaces/threadmessage.interfaces';
import { IHistoryMessage } from '../../entities/interfaces/historymessage.interfaces';

export class ThreadMessageMongoDB implements ThreadMessageRepository {
    constructor(
    @InjectModel('ThreadMessage') private readonly threadModel: Model<IThreadMessage>,
    @InjectModel('HistoryMessage') private readonly historyModel: Model<IHistoryMessage>) { }

    async addThreadToHistoryMessage(threadMessageDto: ThreadMessageDto): Promise<boolean> {
        const history = this.historyModel.findOne({_id: threadMessageDto.historyMsgId});
        let result = false;
        if (history) {
            const saveThreadMessage = new this.threadModel(threadMessageDto);
            const resultsave = await saveThreadMessage.save();
            result = resultsave != null ? true : false;
        }
        return result;
    }
}
