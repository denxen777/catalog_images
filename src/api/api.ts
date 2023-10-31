import { config } from './config';
import { IResponseData } from './interfaces';

export const getImage = async (value: string) => {
  const values = value.split(',').filter(val => val !== '');

  const result = values.map(async val => {
    return await config
      .get<IResponseData>(`&tag=${val}`)
      .then(res => res.data.data);
  });

  return Promise.all(result);
};
