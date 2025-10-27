import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import newRouter from './routes/new';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 6969;

const messages = [];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/new', newRouter);

app.get('/', (req, res) => {
  res.render('index', { messages });
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server running');
})