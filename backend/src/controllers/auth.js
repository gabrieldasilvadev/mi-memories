const authenticate = (req, res) => {
  res.status(200).json({ message: 'Rota de autenticação' });
};

export { authenticate };
