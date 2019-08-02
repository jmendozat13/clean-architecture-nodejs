import { Document } from 'mongoose';

export interface IHistoryMessage extends Document {
    readonly date: Date;
    readonly ip: string;
    readonly device: string;
    readonly aditionalInfo: string;
}
