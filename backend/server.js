import express from 'express';
import auth from './src/routes/auth.js';
import memorie from './src/routes/memorie.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/memorie', memorie);

export default app;
