import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
    restaurants: () => prisma.restaurant.findMany(),
    rankings: () => prisma.ranking.findMany(),
  },
  Mutation: {
    createUser: (_, { email, name }) => {
      return prisma.user.create({
        data: { email, name },
      });
    },
    createRestaurant: (_, { name, description }) => {
      return prisma.restaurant.create({
        data: { name, description },
      });
    },
    createRanking: (_, { userId, restaurantId, score }) => {
      return prisma.ranking.create({
        data: {
          user: { connect: { id: userId } },
          restaurant: { connect: { id: restaurantId } },
          score,
        },
      });
    },
  },
  User: {
    rankings: (parent) => prisma.ranking.findMany({ where: { userId: parent.id } }),
  },
  Restaurant: {
    rankings: (parent) => prisma.ranking.findMany({ where: { restaurantId: parent.id } }),
  },
  Ranking: {
    user: (parent) => prisma.user.findUnique({ where: { id: parent.userId } }),
    restaurant: (parent) => prisma.restaurant.findUnique({ where: { id: parent.restaurantId } }),
  },
};