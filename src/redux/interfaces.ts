import { IImagesData } from '../api/interfaces';

//ТИПИЗИРОВАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export interface ICatalogState {
  isGroup: boolean;
  searchValue: string;
  images: IImageData[];
  groupImages: any;
}

export interface IImageData {
  id: string;
  images: IImagesData;
  tag: string;
}
