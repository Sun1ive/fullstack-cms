import mongoose from 'mongoose';
import Article from '../models/Article';

export const createArticle = async (request, reply) => {
  try {
    const { title, articleBody, author, timestamp } = request.body;
    const newArticle = new Article({
      _id: new mongoose.Types.ObjectId(),
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
