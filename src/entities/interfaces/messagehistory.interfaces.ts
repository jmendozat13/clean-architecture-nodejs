import { Document, Types } from 'mongoose';

export interface IMessageHistory extends Document {
    readonly username: string;
    readonly date: Date;
    readonly input: string;
    readonly output: string;
    readonly parentid: Types.ObjectId;
}
