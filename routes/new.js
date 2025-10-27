import { Router } from 'express';

const newRouter = Router();

newRouter.get('/', (req, res) => {
  const links = req.app.get('links');
  res.render('form', { links });
});

newRouter.post('/', (req, res) => {
  const messages = req.app.get('messages');
  
  const newMessage = {
    id: crypto.randomUUID(),
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  };

  messages.push(newMessage);
  res.redirect('/');
})

export default newRouter;