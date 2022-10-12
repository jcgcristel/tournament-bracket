import { gql } from '@apollo/client';

export const QUERY_TOURNAMENTS = gql`
  query tournaments($username: String) {
    tournaments(username: $username) {
      _id
      tournament_name
      createdAt
      username
    }
  }
`;

export const QUERY_TOURNAMENT = gql`
  query tournament($id: ID!) {
<<<<<<< HEAD
    tournaments(_id: $id) {
=======
    tournament(_id: $id) {
>>>>>>> f4f409245fd3db885915d91ba94efb980577a729
      _id
      tournament_name
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      tournaments {
        _id
        tournament_name
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      tournament {
        _id
        tournament_name
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
    }
  }
`;


