const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        // User properties

    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

 const User = model('User', userSchema);

 module.exports = User;