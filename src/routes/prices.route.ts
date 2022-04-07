import express, { IRouter } from 'express';
import pricesController from '../controllers/prices.controller';
// import pricesValidator from '../validators/prices.validator';

class PricesRoutes {
  private PricesController = new pricesController();
  private router = express.Router();
  // private PricesValidator = new pricesValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all pricess
    this.router.get('/btc', this.PricesController.getAllPrices);

    // //route to get a single prices
    // this.router.get(
    //   '/btc',
    //   this.PricesValidator.newPrices,
    //   this.PricesController.getPrices
    // );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default PricesRoutes;
