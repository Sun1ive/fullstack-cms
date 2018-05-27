import fastify from 'fastify';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import responseTime from 'response-time';
import config from '../config';
import * as ArticleControllers from './controllers/Article';

const app = fastify();

app.use(
  cors({
    origin: ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:8081'],
  }),
);
app.use(morgan('dev'));
app.use(responseTime());

app.get('/', async (request, reply) => {
  try {
    reply.send('hello world');
  } catch (e) {
    reply.send(e);
  }
});

app.route({ url: '/v1/articles', method: 'GET', handler: ArticleControllers.fetchArticles });
app.route({ url: '/v1/articles', method: 'POST', handler: ArticleControllers.createArticle });

/* eslint-disable no-console */
app.listen(8081, () => {
  mongoose
      .connect(config.URL, {
      dbName: 'test',
    })
    .then(() => {
      console.log('Connected to DB!');
      console.log('Server is running at port 8081');
    })
    .catch(e => console.log(e));
});
