import jwt from 'jsonwebtoken';
import util from 'util';
import config from '../../config';

const verify = util.promisify(jwt.verify);

export default async (request, reply, next) => {
  try {
    const [, token] = request.headers.authorization.split(' ');
    await verify(token, config.jwtKey);
    next();
  } catch (e) {
    reply.send({
      error: e,
      message: 'Authentication failed',
    });
  }
};
