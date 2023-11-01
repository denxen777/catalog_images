import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectImages } from '../../redux/selectors';
import { Image } from '../Image/Image';
import { IListImages } from '../ListImages/ListImages';
import { getGroupImages } from '../../utils/getGroupImages';

export const GroupListImages: FC<IListImages> = ({ onClickSetTag }) => {
  const images = useSelector(selectImages);

  const groupImagesElements = useMemo(() => {
    const groupImages = getGroupImages(images);
    return Object.entries(groupImages).map(([key, group]) => {
      return (
        <div className='groupListImages' key={key}>
          <h1>
            <i>{key}</i>
          </h1>
          <div className='list-images'>
            {group.map(img => {
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
    });
  }, [images, onClickSetTag]);

  return <>{groupImagesElements}</>;
};
