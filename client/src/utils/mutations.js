import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TOURNAMENT = gql`
  mutation AddTournament($tournamentName: String!, $userId: String!, $teams: [TeamInput]) {
    addTournament(tournamentName: $tournamentName, userId: $userId, teams: $teams) {
      _id
      uid
      user_id
      tournament_name
      teamsCount
      teams {
          team_name
      }
      matches {
        uid
        next_match
        round
      }
    }
}
`;