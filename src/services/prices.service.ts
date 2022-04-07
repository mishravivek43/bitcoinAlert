// import Prices from '../models/prices.model';
import { IParams } from '../interfaces/prices.interface';
import axios, { AxiosResponse } from 'axios';
import sendMailFunction from '../utils/mailSmtp.util';

class PricesService {
  //get all pricess
  public getAllPrices = async (getAllPricesParams: IParams): Promise<any[]> => {
    console.log(getAllPricesParams);
    const response = await axios.request<any>({
      // eslint-disable-next-line max-len
      url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true',
      // url: 'https://api.coingecko.com/api/v3/global',
      transformResponse: (r: AxiosResponse) => r
    });
    const { data } = response;
    console.table(JSON.parse(data));
    if (data && data[0] && data[0].usd > process.env.MAX) {
      sendMailFunction(true);
    }
    if (data && data[0] && data[0].usd < process.env.MIN) {
      sendMailFunction(false);
    }
    return data;
  };
}

export default PricesService;
