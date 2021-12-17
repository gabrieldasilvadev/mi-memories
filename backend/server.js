import express from 'express';
import auth from './src/routes/auth.js';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);

export default app;
