const { Schema, model } = require('mongoose');

const tournamentSchema = new Schema(
    {
        // Tournament properties

    },
    {
        toJSON: {
            virtuals: true
        }
    }
);
 const Tournament = model('Tournament', tournamentSchema);

 module.exports = Tournament;