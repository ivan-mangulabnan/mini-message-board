import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import newRouter from './routes/new.js';
import messageRouter from './routes/messages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 6969;

const links = [
  { href: '/', name: 'Home' },
  { href: '/new', name: 'New Message' }
];

const messages = [];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('links', links);
app.set('messages', messages);

app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter);
app.use('/messages', messageRouter);

app.get('/', (req, res) => {
  res.render('index', { links, messages });
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server running');
})