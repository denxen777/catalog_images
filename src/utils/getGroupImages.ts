import { IImageData, TGroupImages } from '../redux/interfaces';

export const getGroupImages = (arr: IImageData[]) => {
  return arr.reduce((acc, img) => {
    const prop = img.tag;
    acc[prop] = acc[prop] || [];
    acc[prop].push(img);
    return acc;
  }, {} as TGroupImages);
};
