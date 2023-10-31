import React, { FC, MouseEventHandler } from 'react';

interface IImage {
  path: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export const Image: FC<IImage> = ({ path, onClick }) => {
  return <img className='img' onClick={onClick} src={path} alt='img' />;
};
