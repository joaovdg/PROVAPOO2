import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.usuario.create({
    data: {
      nome: 'joao',
      email: 'joaouvv@prisma.io',
    },
  })
  console.log(user)


  const leilao = await prisma.leilao.create({
    data:{       
    produto: 'iphone 12', 
    preco: 2.000,     
    dataLimite: '28/09/2002',
    donoId: 1,

    },
  })
  console.log(leilao)
}




main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  