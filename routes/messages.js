import { Router } from "express";
const messageRouter = Router();

messageRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  const message = req.app.get('messages');
  const messageInfo = message.find(mes => mes.id === id);
  const links = req.app.get('links');
  
  res.render('messages', { links, messageInfo });
})

export default messageRouter;