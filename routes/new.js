import { Router } from 'express';

const newRouter = Router();

newRouter.get('/', (req, res) => {
  const links = req.app.get('links');
  res.render('form', { links });
})

export default newRouter;