import React from 'react';
import { useSelector } from 'react-redux';
import { selectImages } from '../redux/selectors';

export const ListImages = () => {
  const arr = [
    'https://media3.giphy.com/media/EmMWgjxt6HqXC/giphy.gif?cid=d9c7ea23uxrm6tem3tf5ag9wuvfup26mpr5ni0jtp32oixuw&ep=v1_gifs_random&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/EmMWgjxt6HqXC/giphy.gif?cid=d9c7ea23uxrm6tem3tf5ag9wuvfup26mpr5ni0jtp32oixuw&ep=v1_gifs_random&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/EmMWgjxt6HqXC/giphy.gif?cid=d9c7ea23uxrm6tem3tf5ag9wuvfup26mpr5ni0jtp32oixuw&ep=v1_gifs_random&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/QcU7xYkbESfug/giphy.gif?cid=d9c7ea23idqyq83reuvdge9704bsxzbdvbq0j27935hcw4x2&ep=v1_gifs_random&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/CSLDdnY00Dpc2uBIJl/giphy-downsized.gif?cid=d9c7ea233kydra1og2yaoya48kqjukckdia9jtlc08yfbfxq&ep=v1_gifs_random&rid=giphy-downsized.gif&ct=g',
  ];

  const images = useSelector(selectImages);

  return (
    <div className='list-images'>
      {images.map((v, i) => (
        <div className='list-images__wrap-img' key={i}>
          <img src={v} alt='img' className='list-images__img' />
        </div>
      ))}
    </div>
  );
};
