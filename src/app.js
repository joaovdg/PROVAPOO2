// Código Atualizado
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

// Rota para listar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body;
  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
      },
    });
    res.json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para listar todos os lances
app.get('/lances', async (req, res) => {
  try {
    const lances = await prisma.lance.findMany();
    res.json(lances);
  } catch (error) {
    console.error('Erro ao obter lances:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para criar um novo lance
app.post('/lances', async (req, res) => {
  const { valor, compradorId, leilaoId } = req.body;
  try {
    const novoLance = await prisma.lance.create({
      data: {
        valor,
        compradorId,
        leilaoId,
      },
    });
    res.json(novoLance);
  } catch (error) {
    console.error('Erro ao criar lance:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para listar todos os leilões
app.get('/leiloes', async (req, res) => {
  try {
    const leiloes = await prisma.leilao.findMany();
    res.json(leiloes);
  } catch (error) {
    console.error('Erro ao obter leilões:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para criar um novo leilão
app.post('/leiloes', async (req, res) => {
  const { produto, preco, dataLimite, donoId } = req.body;
  try {
    const novoLeilao = await prisma.leilao.create({
      data: {
        produto,
        preco,
        dataLimite,
        donoId,
      },
    });
    res.json(novoLeilao);
  } catch (error) {
    console.error('Erro ao criar leilão:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para listar todos os jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
  } catch (error) {
    console.error('Erro ao obter jobs:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para criar um novo job
app.post('/jobs', async (req, res) => {
  // Adicione o código para criar um novo job aqui
  res.send('Rota para criar job');
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
