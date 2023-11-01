import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectGroupImages } from '../../redux/selectors';
import { Image } from '../Image/Image';
import { IListImages } from '../ListImages/ListImages';

export const GroupListImages: FC<IListImages> = ({ onClickSetTag }) => {
  const groupImages = useSelector(selectGroupImages);
  const data: ReactElement[] = [];

  for (const key in groupImages) {
    const result = (
      <div className='groupListImages' key={key}>
        <h1>
          <i>{key}</i>
        </h1>
        <div className='list-images'>
          {groupImages[key].map(img => {
            return (
              <div className='list-images__img' key={img.id}>
                <Image
                  key={img.id}
                  alt={img.tag}
                  path={img.images.fixed_height.url}
                  onClick={onClickSetTag(img.tag)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
    data.push(result);
  }

  return <>{data}</>;
};
