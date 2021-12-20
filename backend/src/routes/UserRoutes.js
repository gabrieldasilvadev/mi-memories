import { Router } from 'express';

const userRoutes = Router();

try {
} catch (err) {}

userRoutes.post('/user', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
});

export { userRoutes };
