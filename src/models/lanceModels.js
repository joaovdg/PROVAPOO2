const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Lance = {
  findMany: async () => {
    return await prisma.lance.findMany();
  },

  findUnique: async ({ where }) => {
    return await prisma.lance.findUnique({ where });
  },

  create: async ({ data }) => {
    return await prisma.lance.create({ data });
  },

  update: async ({ where, data }) => {
    return await prisma.lance.update({ where, data });
  },

  delete: async ({ where }) => {
    return await prisma.lance.delete({ where });
  },
};

module.exports = Lance;