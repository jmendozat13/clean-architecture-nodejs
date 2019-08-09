import * as mongoose from 'mongoose';
import * as bcrypts from 'mongoose-bcrypt';

export const userSchema = new mongoose.Schema({
    username: {
        type: String,
        max: 80,
        min: 5,
        required: true,
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
        bcrypt : true,
    },
});

userSchema.plugin(bcrypts), { rondas : 8 } ;

