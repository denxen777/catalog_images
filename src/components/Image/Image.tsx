import React, { FC, MouseEventHandler } from 'react';

interface IImage {
  path: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export const Image: FC<IImage> = ({ path, onClick, alt }) => {
  return <img className='img' onClick={onClick} src={path} alt={alt} />;
};
