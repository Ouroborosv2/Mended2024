import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String
    rankings: [Ranking!]!
  }

  type Restaurant {
    id: ID!
    name: String!
    description: String
    rankings: [Ranking!]!
  }

  type Ranking {
    id: ID!
    user: User!
    restaurant: Restaurant!
    score: Int!
  }

  type Query {
    users: [User!]!
    restaurants: [Restaurant!]!
    rankings: [Ranking!]!
  }

  type Mutation {
    createUser(email: String!, name: String): User!
    createRestaurant(name: String!, description: String): Restaurant!
    createRanking(userId: ID!, restaurantId: ID!, score: Int!): Ranking!
  }
`;