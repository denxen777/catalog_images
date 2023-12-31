export interface IResponseData {
  data: IData;
}

export interface IData {
  id: string;
  images: IImages;
}

export interface IImages {
  fixed_height: IImageProps;
}

interface IImageProps {
  height: string;
  width: string;
  size: string;
  url: string;
}
