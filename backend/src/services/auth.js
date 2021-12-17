import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

import { Unauthorized } from './exceptions/HttpRequestError.js';

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

const authenticated = (headers) => {
  try {
    const authorization = headers.authorization;
    const token = authorization.split(' ')[2];

    const decoded = jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        throw new Unauthorized('Token invalido');
      }

      return decoded;
    });

    return decoded.username;
  } catch (error) {
    throw new Unauthorized(error.message || 'Header invalido');
  }
};

export { authenticate, authenticated };
