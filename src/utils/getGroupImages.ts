import { IImageData, TGroupImages } from '../redux/interfaces';

export const getGroupImages = (arr: IImageData[][]) => {
  return arr.reduce((accum, arr) => {
    arr.forEach(img => {
      const prop = img.tag;
      accum[prop] = accum[prop] || [];
      accum[prop].push(img);
    });
    return accum;
  }, {} as TGroupImages);
};
