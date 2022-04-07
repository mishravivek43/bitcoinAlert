import express, { IRouter } from 'express';
const router = express.Router();

import pricesRoute from './prices.route';
// import userRoute from './user.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  // router.use('/users', new userRoute().getRoutes());

  router.use('/prices', new pricesRoute().getRoutes());
  return router;
};

export default routes;
