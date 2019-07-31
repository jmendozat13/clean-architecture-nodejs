import { Document, Types } from 'mongoose';

export interface IMessageHistory extends Document {
    readonly username: string;
    readonly date: Date;
    readonly message: string;
    readonly msgthreadId: Types.ObjectId;
}
