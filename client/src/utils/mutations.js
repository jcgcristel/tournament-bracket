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
  mutation addTournament($tournament_name: String!) {
    addTournament(tournament_name: $tournament_name) {
      _id
      tournament_name
      createdAt
      username
    }
  }
`;

export const DELETE_TOURNAMENT = gql`
  mutation deleteTournament($id: ID!) {
    deleteTournament(songId: $songId) {
      _id
    }
  }
`;