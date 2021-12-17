import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

import { Unauthorized } from './exceptions/HttpRequesError.js';

const authenticate = (user) => {
  if (user.username != 'gabriel' || user.password != '123') {
    throw new Unauthorized('Usuario nao autenticado!');
  }

  return generateToken(user.username);
};

const generateToken = (username) => {
  return jwt.sign({ username: username }, process.env.SECRET, {
    expiresIn: 10000,
  });
};

export { authenticate };
