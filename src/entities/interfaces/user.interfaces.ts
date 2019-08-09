import { Document, Types } from 'mongoose';

export interface IUser extends Document {
    readonly username: string;
    readonly password: string;
    readonly date: Date;
}
