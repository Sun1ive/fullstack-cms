import fastify from 'fastify';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import responseTime from 'response-time';
import config from '../config';
import * as ArticleControllers from './controllers/Article';
import jwt from './middleware';

const app = fastify();

app.use(cors());
app.use(morgan('dev'));
app.use(responseTime());

app.route({ url: '/v1/articles', method: 'GET', handler: ArticleControllers.fetchArticles });
app.route({ url: '/v1/articles', method: 'POST', handler: ArticleControllers.createArticle });
app.route({ url: '/v1/articles', method: 'DELETE', handler: ArticleControllers.deleteArticle });
app.route({ url: '/v1/articles', method: 'PATCH', handler: ArticleControllers.editArticle });
app.route({ url: '/v1/articles/clear', method: 'POST', handler: ArticleControllers.editArticle });

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
