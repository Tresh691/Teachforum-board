import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Клиент подключился:', socket.id)

  socket.on('message', (data) => {
    console.log('Получено сообщение:', data)
    socket.broadcast.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('Клиент отключился', socket.id)
  })
})

app.get('/', (req, res) => {
  res.send('Доска работает!')
})

app.post('/boards', async (req, res) => {
const { title, data } = req.body
if (!title){
  return res.status(400).json({message: 'Поле не должно быть пустым'})
}
try{
  const newBoard = await prisma.board.create({
    data: {
      title: title,
      data: data || {}
    }
  })
  res.status(201).json(newBoard)
} catch(error) {
  res.status(500).send('Не удалось добавить доску')
  console.error(error)
}
})

app.get('/boards/:id', async (req,res) => {
  const id = req.params.id
  try{
    const board = await prisma.board.findUnique({where: { id } })
    if (board == null){
      return res.status(404).json({message: 'Доска не найдена'})
    }
    res.status(200).json(board)
  } catch (error){
    res.status(500).send('Не удалось открыть доску')
    console.error(error)
  }
})

server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
})