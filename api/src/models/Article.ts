import * as mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Article = new Schema({
  _id: Schema.Types.ObjectId,
  image: { type: String, required: true },
  title: { type: String, required: true },
  articleBody: { type: String, required: true },
  author: { type: String, required: true },
  timestamp: { type: String, required: true },
  views: { type: Number, default: 0 },
});

export default model('Article', Article);
