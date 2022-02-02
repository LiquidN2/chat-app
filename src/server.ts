import { httpServer } from './app';

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  // close the src before shutting down the application
  process.exit(1);
});

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
  console.log(`***** ${env.toUpperCase()} *****`);
  console.log(`✅ App running on port ${port} ✅`);
});
