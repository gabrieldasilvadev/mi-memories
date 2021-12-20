import express from 'express';
import conn from './database/conn.js';
const PORT = 3000;
const app = express();
app.use(express.json());

// Template engine setup
app.set('view engine', 'handlebars');

app.use(express.static('public'));
// Models
import User from './models/User.js';
import Memorie from './models/Memorie.js';

app.get('/', (req, res) => {
  res.send('hello world');
});

conn
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor iniciado: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
