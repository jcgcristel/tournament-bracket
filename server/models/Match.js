const { Schema } = require('mongoose');

const matchSchema = new Schema(
    {
        // Match Properties

    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = Match;