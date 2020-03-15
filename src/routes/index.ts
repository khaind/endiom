import {Router} from "express";
import user from "./user";

const routes = Router();

// middleware that is specific to this router
routes.use(function timeLog (req, res, next) {
  const now = new Date();
  console.info(`Incomming request on ${now.toISOString()}`);
  next()
})

routes.get('/ping', (req, res) => {
  res.send('pong');
})

routes.use("/user", user);

export default routes;