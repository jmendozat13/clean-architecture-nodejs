import { Document } from 'mongoose';
import { IThreadMessage } from './threadmessage.interfaces';
import { User } from '../entity/user.entity';

export interface IHistoryMessage extends Document {
    readonly _id: any;
    readonly date: Date;
    readonly ip: string;
    readonly device: string;
    readonly user: User;
    readonly aditionalInfo: string;
    readonly threadMessages: IThreadMessage[];
}
