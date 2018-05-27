import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

export const createUser = async (request, reply) => {
  try {
    const { firstName, lastName, email, password, role } = request.body;
    const hash = await bcrypt.hash(password, 15);

    const checkUser = await User.find({ email });
    if (checkUser.length > 0) {
      reply.send({
        message: 'This email already in use',
      });
    }

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName,
      lastName,
      email,
      role,
      password: hash,
      access: {},
    });
    await newUser.save();
    reply.send(newUser);
  } catch (e) {
    reply.send(e);
  }
};

export const fetchUsers = async (request, reply) => {
  try {
    const Users = await User.find({});
    reply.send(Users);
  } catch (e) {
    reply.send(e);
  }
};

export const deleteUser = async (request, reply) => {
  try {
    const { id } = request.body;
  } catch (e) {
    reply.send(e);
  }
};

export const editUser = async (request, reply) => {
  try {
  } catch (e) {
    reply.send(e);
  }
};
