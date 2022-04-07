import { Document } from 'mongoose';

export interface IPrices extends Document {
  _id: string | number;
  name: string;
}
export interface IParams {
  date: string;
  limit?: number;
  offset?: number;
}
