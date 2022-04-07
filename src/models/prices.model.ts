import { Schema, model } from 'mongoose';
import { IPrices } from '../interfaces/prices.interface';

const pricesSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model<IPrices>('Prices', pricesSchema);
