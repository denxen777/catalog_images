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
        <h1>{key}</h1>
        <div className='groupListImages__list'>
          {groupImages[key].map(img => {
            return (
              <Image
                key={img.id}
                path={img.images.original.url}
                onClick={onClickSetTag(img.tag)}
              />
            );
          })}
        </div>
      </div>
    );
    data.push(result);
  }

  return <>{data}</>;
};
