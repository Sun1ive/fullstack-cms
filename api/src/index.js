import fastify from 'fastify';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import responseTime from 'response-time';
import config from '../config';
import * as ArticleControllers from './controllers/Article';
import * as UserControllers from './controllers/User';
import auth from './controllers/Authorization'
// import jwt from './middleware';

const app = fastify();

app.use(cors());
app.use(morgan('dev'));
app.use(responseTime());


/* refactor this below */

/* articles */
app.route({ url: '/v1/articles', method: 'GET', handler: ArticleControllers.fetchArticles });
app.route({
  url: '/v1/articles',
  method: 'POST',
  // beforeHandler: jwt,
  handler: ArticleControllers.createArticle,
});
app.route({
  url: '/v1/articles',
  method: 'DELETE',
  // beforeHandler: jwt,
  handler: ArticleControllers.deleteArticle,
});
app.route({
  url: '/v1/articles',
  method: 'PATCH',
  // beforeHandler: jwt,
  handler: ArticleControllers.editArticle,
});
app.route({
  url: '/v1/articles/clear',
  method: 'POST',
  // beforeHandler: jwt,
  handler: ArticleControllers.clearArticles,
});

/* user */
app.route({
  url: '/v1/users',
  method: 'GET',
  /* beforeHandler: jwt, */
  handler: UserControllers.fetchUsers,
});
app.route({
  url: '/v1/users',
  method: 'POST',
  /* beforeHandler: jwt, */
  handler: UserControllers.createUser,
});
app.route({
  url: '/v1/users',
  method: 'DELETE',
  /* beforeHandler: jwt, */
  handler: UserControllers.deleteUser,
});


/* authorization */
app.route({
  url: '/v1/auth',
  method: 'POST',
  /* beforeHandler: jwt, */
  handler: auth,
});

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
