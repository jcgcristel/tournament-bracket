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

  for (let i = 0; i < 10; i += 1) {
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

    const createdTournament = await Tournament.create({
      tournament_name,
      userId
    });

    createdTournaments.push(createdTournament);
  }

  // create teams
  let createdTeams = [];
  for (let i = 0; i < 10; i += 1) {
    const team_name = faker.lorem.words(Math.round(Math.random()) + 1);

    const randomTournamentIndex = Math.floor(Math.random() * createdTournaments.ops.length);
    const { tournament_name, _id: tournamentId } = createdTournaments.ops[randomTournamentIndex];

    const createdTeam = await Team.create({
      team_name,
      tournamentId,
    });

    createdTeams.push(createdTeam);
  }



  console.log("all done!");
  process.exit(0);
});
