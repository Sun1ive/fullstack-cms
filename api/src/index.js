// @flow
import fastify from 'fastify';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

const app = fastify();

app.get('/', async (request, reply) => {
  try {
    reply.send('hello world');
  } catch (e) {
    reply.send(e);
  }
});


app.listen(8081, () => console.log('Server is running at port 8081'));
