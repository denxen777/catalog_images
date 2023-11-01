import { IImages } from '../api/interfaces';

export interface ICatalogState {
  timerId: number | null;
  isGroup: boolean;
  searchValue: string;
  images: IImageData[][];
  groupImages: TGroupImages;
}

export interface IImageData {
  id: string;
  images: IImages;
  tag: string;
}

export type TGroupImages = Record<string, IImageData[]>;
