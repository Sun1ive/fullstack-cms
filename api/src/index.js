// @flow
import fastify from 'fastify';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import config from '../config';

const app = fastify();

app.use(
  cors({
    origin: ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:8081'],
  }),
);
app.use(morgan('dev'));

app.get('/', async (request, reply) => {
  try {
    reply.send('hello world');
  } catch (e) {
    reply.send(e);
  }
});

app.listen(8081, () => {
  mongoose
    .connect(config.URL, {
      db: config.db.MONGODBNAME,
      poolSize: 10,
    })
    .then(() => {
      /* eslint-disable no-console */
      console.log('Connected to DB!');
      console.log('Server is running at port 8081');
    });
});
