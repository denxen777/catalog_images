import React, { FC, MouseEventHandler } from 'react';

interface IImage {
  path: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export const Image: FC<IImage> = ({ path, onClick }) => {
  return (
    <div className='image-wrap'>
      <img className='image-wrap__img' onClick={onClick} src={path} alt='img' />
    </div>
  );
};
