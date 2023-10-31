import { IImageData, TGroupImages } from '../redux/interfaces';

export const getGroupImages = (arr: IImageData[][]) => {
  return arr.reduce((accum, val) => {
    val.forEach(v => {
      const prop = v.tag;
      accum[prop] = accum[prop] || [];
      accum[prop].push(v);
    });
    return accum;
  }, {} as TGroupImages);
};
