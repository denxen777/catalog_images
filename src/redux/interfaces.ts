import { IImagesData } from '../api/interfaces';

export interface ICatalogState {
  timerId: number;
  isGroup: boolean;
  searchValue: string;
  images: IImageData[][];
  groupImages: TGroupImages;
}

export interface IImageData {
  id: string;
  images: IImagesData;
  tag: string;
}

export type TGroupImages = Record<string, IImageData[]>;
