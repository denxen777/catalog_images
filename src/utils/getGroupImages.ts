//ТИПИЗИРОВАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { IImageData } from '../redux/interfaces';

export const getGroupImages = (arr: IImageData[]) => {
  return arr.reduce((acc: any, val) => {
    const prop = val.tag;
    acc[prop] = acc[prop] || [];
    acc[prop].push(val);
    return acc;
  }, {});
};
