// const Joi = require('joi').extend(require('@joi/date'));
import BaseJoi from '@hapi/joi';
import JoiDate from '@hapi/joi-date';
const Joi = BaseJoi.extend(JoiDate);
import { Request, Response, NextFunction } from 'express';
class PricesValidator {
  public newPrices = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      date: Joi.date().format('DD-MM-YYYY').options({ convert: false }),
      limit: Joi.number().optional(),
      offset: Joi.number().optional()
    });
    const { error } = schema.validate(req.params);
    if (error) {
      next(error);
    }
    next();
  };
}

export default PricesValidator;
