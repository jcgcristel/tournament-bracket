const faker = require('faker');

const db = require('../config/connection');

const { Tournament, User } = require('../models');

db.once('open', async () => {
  await Tournament.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 5; i += 1) {
    const username = faker.internet.userName();
    const password = faker.internet.password();

    userData.push({ username, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create tournaments
  let createdTournaments = [];
  for (let i = 0; i < 10; i += 1) {
    const tournament_name = faker.lorem.words(Math.round(Math.random() * 1) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdTournament = await Tournament.create({ tournament_name, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { tournaments: createdTournament._id } }
    );

    createdTournaments.push(createdTournament);
  }

  // create teams
  for (let i = 0; i < 100; i += 1) {
    const team_name = faker.lorem.words(Math.round(Math.random() * 1) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomTournamentIndex = Math.floor(Math.random() * createdTournaments.length);
    const { _id: tournamentId } = createdTournaments[randomTournamentIndex];

    await Tournament.updateOne(
      { _id: tournamentId },
      { $push: { teams: { team_name, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
