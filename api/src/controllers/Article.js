import mongoose from 'mongoose';
import Article from '../models/Article';

export const createArticle = async (request, reply) => {
  try {
    const { image, title, articleBody, author, timestamp } = request.body;
    const newArticle = new Article({
      _id: new mongoose.Types.ObjectId(),
      image,
      title,
      articleBody,
      author,
      timestamp,
      views: 0,
    });
    const response = await newArticle.save();
    reply.send(response);
  } catch (e) {
    reply.send(e);
  }
};

export const fetchArticles = async (request, reply) => {
  try {
    const Articles = await Article.find({});
    reply.send(Articles);
  } catch (e) {
    reply.send(e);
  }
};

export const clearArticles = async (request, reply) => {
  try {
    await Article.remove();
    reply.send({
      message: 'All articles has been removed',
    });
  } catch (e) {
    reply.send(e);
  }
};

export const deleteArticle = async (request, reply) => {
  try {
    const { id } = request.body;
    const article = await Article.findById(id);
    if (!article) {
      reply.code(404).send({ error: 'Article not found' });
    }
    const response = await article.remove();
    reply.send({
      message: 'Article has been removed',
      article: response,
    });
  } catch (e) {
    reply.send(e);
  }
};

export const editArticle = async (request, reply) => {
  try {
    const { id, title, articleBody } = request.body;
    const edit = {
      title,
      articleBody,
    };
    await Article.findByIdAndUpdate(id, edit);
    reply.send({ message: 'Article has been edited!' });
  } catch (e) {
    reply.send(e);
  }
};
