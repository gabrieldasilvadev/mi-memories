import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de autenticação criada com sucesso!' });
});

export default router;
