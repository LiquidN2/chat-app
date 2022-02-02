import express, { Request, Response } from 'express';
import { join } from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import BadWordsFilter from 'bad-words';
import { generateMessage } from './utils/messages';

export const app = express();
export const httpServer = createServer(app);

const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static file
app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.get('*', (req: Request, res: Response) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

io.on('connection', socket => {
  console.log('New websocket connection');

  socket.on('join', ({ name, room }: { name: string; room: string }) => {
    socket.join(room);
    socket.emit('message', generateMessage('Welcome!'));
    socket.broadcast
      .to(room)
      .emit('message', generateMessage(`${name} has joined`));
  });

  socket.on('message-client', (data: string) => {
    const filter = new BadWordsFilter();

    // if (filter.isProfane(data)) {
    //   return callback('profanity not allowed');
    // }

    io.emit('message-server', generateMessage(data));
    // callback();
  });

  socket.on('send-location', (data: string) => {
    io.emit('message-server', generateMessage(data));
  });

  socket.on('disconnect', () => {
    io.emit('message', generateMessage('A user has left the chat room'));
  });
});
