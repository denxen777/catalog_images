import React, { FC, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';

import { selectImages } from '../../redux/selectors';
import { Image } from '../Image/Image';

export interface IListImages {
  onClickSetTag: (tag: string) => MouseEventHandler<HTMLImageElement>;
}

export const ListImages: FC<IListImages> = ({ onClickSetTag }) => {
  const images = useSelector(selectImages);

  return (
    <div className='list-images'>
      {images.map(arr => {
        return (
          <div className='wrap-img'>
            {arr.map(img => {
              return (
                <Image
                  key={img.id}
                  path={img.images.fixed_height.url}
                  onClick={onClickSetTag(img.tag)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
