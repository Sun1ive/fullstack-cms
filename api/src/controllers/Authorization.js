import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';
import config from '../../config';

export default async (request, reply) => {
  try {
    const { email, password } = request.body;
    const [user] = await User.find({ email });
    if (!user) reply.code(404).send({ message: 'User not found' });
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = jwt.sign(
        {
          email: user.email,
          /* eslint-disable-next-line */
          userId: user._id,
        },
        config.jwtKey,
        {
          expiresIn: '24h',
        },
      );
      reply.send({
        message: 'Successful authorization',
        user,
        token: `Bearer ${token}`,
      });
    } else {
      reply.code(409).send({ message: 'Wrong authorization credentials' });
    }
  } catch (e) {
    reply.code(500).send(e);
  }
};
