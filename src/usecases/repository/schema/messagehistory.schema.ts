import * as mongoose from 'mongoose';

export const MessageHistorySchema = new mongoose.Schema({
    username: {
        type: String,
        max: 30,
        min: 2,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    input: {
        type: String,
    },
    output: {
        type: String,
    },
    parentid: mongoose.Types.ObjectId,
});
