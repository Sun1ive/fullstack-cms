import mongoose from 'mongoose';

const { Schema } = mongoose;

const Article = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  articleBody: { type: String, required: true },
  timestamp: { type: String, required: true },
  author: { type: String, required: true },
  views: Number,
});

export default mongoose.model('Article', Article);
