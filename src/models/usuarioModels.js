const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Usuario = {
  findMany: async () => {
    return await prisma.usuario.findMany();
  },

  findUnique: async ({ where }) => {
    return await prisma.usuario.findUnique({ where });
  },

  create: async ({ data }) => {
    return await prisma.usuario.create({ data });
  },

  update: async ({ where, data }) => {
    return await prisma.usuario.update({ where, data });
  },

  delete: async ({ where }) => {
    return await prisma.usuario.delete({ where });
  },
};

module.exports = Usuario;