const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Leilao = {
  findMany: async () => {
    return await prisma.leilao.findMany();
  },

  findUnique: async ({ where }) => {
    return await prisma.leilao.findUnique({ where });
  },

  create: async ({ data }) => {
    return await prisma.leilao.create({ data });
  },

  update: async ({ where, data }) => {
    return await prisma.leilao.update({ where, data });
  },

  delete: async ({ where }) => {
    return await prisma.leilao.delete({ where });
  },
};

module.exports = Leilao;