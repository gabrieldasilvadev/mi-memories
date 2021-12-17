import { authenticate as authService } from '../services/auth.js';

const memorie = (req, res) => {
  return res.status(200).json({ message: 'sucesso' });
};

export { memorie };
