/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import pricesService from '../services/prices.service';

import { Request, Response, NextFunction } from 'express';
import { IParams } from '../interfaces/prices.interface';

class PricesController {
  public PricesService = new pricesService();

  /**
   * Controller to get all pricess available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllPrices = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      console.log('yeah', req.query);
      const params: IParams = {
        date: req.query.date ? req.query.date.toString() : '',
        limit: req.query.limit
          ? parseInt(req.query.limit.toString())
          : undefined,
        offset: req.query.offset
          ? parseInt(req.query.offset.toString())
          : undefined
      };
      const data = await this.PricesService.getAllPrices(params);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All prices fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };
}
export default PricesController;
