const { Schema } = require('mongoose');

const teamSchema = new Schema(
    {
        // Team properties
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = teamSchema;
