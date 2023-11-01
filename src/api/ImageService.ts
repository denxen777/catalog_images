import { api, API_KEY } from './api';
import { IResponseData } from './interfaces';

export const getImages = async (value: string) => {
  const tags = value.split(',').filter(tag => tag !== '');

  const result = tags.map(async tag => {
    return await api
      .get<IResponseData>(`?api_key=${API_KEY}&tag=${tag}`)
      .then(res => res.data.data)
      .then(data => ({
        data,
        tag,
      }));
  });

  return Promise.all(result);
};
