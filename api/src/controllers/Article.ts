import * as express from 'express';
import * as mongoose from 'mongoose';
import Article from '../models/Article';

interface Article {
  title: string;
  image: string;
  articleBody: string;
  author: string;
  timestamp: string;
  views?: number;
}

export const createArticle = async (req: express.Request, res: express.Response) => {
  try {
    const { title, image, articleBody, author, timestamp }: Article = req.body;
    const newArticle = new Article({
      _id: new mongoose.Types.ObjectId(),
      title,
      image,
      articleBody,
      author,
      timestamp,
    });
    await newArticle.save();
    res.status(200).json({
      message: 'Article has been successfully created!',
      article: newArticle,
    });
  } catch (e) {
    res.status(403).json({
      message: 'Wrong data, please try again',
      error: e,
    });
  }
};

export const fetchArticles = async (req: express.Request, res: express.Response) => {
  try {
    const articles = await Article.find({});
    res.status(200).json(articles);
  } catch (e) {
    res.status(403).json({
      message: 'Something bad happened',
      error: e,
    });
  }
};

export const deleteArticle = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.query;
    const response = await Article.findByIdAndRemove(id);
    res.status(200).json({
      message: 'Article has been removed',
      article: response,
    });
  } catch (e) {
    res.status(403).json({
      message: 'Wrong data',
      error: e,
    });
  }
};

export const editArticle = async (req: express.Request, res: express.Response) => {};

export const incrementView = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.body;
    const article = await Article.findById(id).lean();
    article.views += 1;
    await Article.findByIdAndUpdate(id, article);
  } catch (e) {
    res.status(403).json({
      message: 'Error has occurred',
      error: e,
    });
  }
};
