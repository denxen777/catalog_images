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
          <div className='wrap-img'>
            {groupImages[key].map(img => {
              return (
                <Image
                  key={img.id}
                  path={img.images.fixed_height.url}
                  onClick={onClickSetTag(img.tag)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
    data.push(result);
  }

  return <>{data}</>;
};

/*export const GroupListImages: FC<IListImages> = ({ onClickSetTag }) => {
  const groupImages = useSelector(selectGroupImages);

  return (
    <>
      {groupImages.map(obj => {
        const key = Object.keys(obj).join('');
        return (
          <div className='groupListImages'>
            <h1>{key}</h1>
            <div className='groupListImages__list'>
              <div className='wrap-img'>
                {obj[key].map(img => {
                  return (
                    <Image
                      key={img.id}
                      path={img.images.fixed_height.url}
                      onClick={onClickSetTag(img.tag)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};*/
