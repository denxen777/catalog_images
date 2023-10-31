import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectGroupImages,
  selectImages,
  selectIsGroup,
} from '../../redux/selectors';

export const ListImages = () => {
  const images = useSelector(selectImages);

  return (
    <div className='list-images'>
      {images.map(val => (
        <div className='list-images__wrap-img' key={val.id}>
          <img
            className='list-images__img'
            src={val.images.original.url}
            alt='img'
          />
        </div>
      ))}
    </div>
  );
};
