import React from 'react';
import { useSelector } from 'react-redux';

import { selectGroupImages } from '../../redux/selectors';

export const GroupListImages = () => {
  const groupImages = useSelector(selectGroupImages);
  const data = [];

  for (const key in groupImages) {
    //data.push([groupImages[key]]);
    const result = (
      <div className='groupListImages__inner' key={key}>
        {groupImages[key].map((obj: any) => {
          return <img key={obj.id} src={obj.images.original.url} alt='img' />;
        })}
      </div>
    );
    data.push(result);
  }

  return (
    <div className='groupListImages'>
      {/*{data.map((arr: any, idx) => {
        return (
          <div className='groupListImages__inner' key={idx}>
            {arr.map((res: any) => {
              return res.map((obj: any) => {
                return (
                  <img key={obj.id} src={obj.images.original.url} alt='img' />
                );
              });
            })}
          </div>
        );
      })}*/}
      {data}
    </div>
  );
};
