import { Router } from 'express';
import user from './user';
import idiom from './idiom';

const routes = Router();

// middleware that is specific to this router
routes.use(function timeLog(req, res, next) {
  const now = new Date();
  console.info(`Incomming request on ${now.toISOString()}`);
  next();
});

routes.get('/ping', (req, res) => {
  res.send('pong');
});

routes.use('/user', user);
routes.use('/idiom', idiom);

export default routes;

