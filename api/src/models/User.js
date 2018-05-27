import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
  _id: Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  phoneNumber: { type: Number, default: 0 },
  access: Object,
});

export default mongoose.model('User', User);
