const faker = require("faker");

const db = require("../config/connection");

const { Match, Team, Tournament, User } = require("../models");

db.once("open", async () => {
  await Match.deleteMany({});
  await Team.deleteMany({});
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

  // create tournament data
  const tournamentData = [];

  for (let i = 0; i < 10; i += 1) {
    const name = faker.lorem.words(Math.round(Math.random()) + 1);
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: host_id } = createdUsers.ops[randomUserIndex];
    const champion_id = '63408d6fcaf523fb60da4854';

    tournamentData.push({ name, host_id, champion_id });
  }

  const createdTournaments = await Tournament.collection.insertMany(
    tournamentData
  );

  console.log(userData);
  console.log(tournamentData);

  console.log("all done!");
  process.exit(0);
});