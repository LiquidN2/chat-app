import express, { Request, Response } from 'express';
import * as path from 'path';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static file
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
