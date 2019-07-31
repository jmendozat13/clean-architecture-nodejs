import { Document, Types } from 'mongoose';

export interface IMessageHistory extends Document {
    readonly date: Date;
    readonly ip: string;
    readonly device: string;
    readonly aditionalInfo: string;
}
