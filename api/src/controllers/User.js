import mongoose from 'mongoose';
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
    if (!id) {
      reply.send({ error: 'ID is required' });
    }
    const user = await User.findById(id);
    if (!user) reply.code(404).send({ message: 'User not found' });
    const resp = await user.remove();
    reply.send({
      user: resp,
      message: 'Successfully deleted!',
    });
  } catch (e) {
    reply.send(e);
  }
};

export const editUser = async (request, reply) => {
  try {
    /* probably route for admin panel. too many requried params */
    const { id, firstName, lastName, password, role, phoneNumber, access, email } = request;

    const editedProfile = {
      firstName,
      lastName,
      password,
      role,
      phoneNumber,
      access,
      email,
    };

    const updatedUser = await User.findByIdAndUpdate(id, editedProfile);
    reply.send(updatedUser);
  } catch (e) {
    reply.send(e);
  }
};
