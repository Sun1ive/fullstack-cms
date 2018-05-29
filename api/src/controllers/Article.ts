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
    const { title, image, articleBody, author, timestamp } = req.body;
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
    res.status(403).json({ message: 'Wrong data, please try again', error: e });
  }
};

