import { config } from './config';
import {  IResponseData } from "./interfaces";

export const getImage = async (value: string) => {
  return await config.get<IResponseData>(`&tag=${value}`).then(res => res.data.data);
};
