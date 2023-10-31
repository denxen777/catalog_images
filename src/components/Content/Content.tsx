import React from 'react';
import { useSelector } from 'react-redux';

import { GroupListImages } from '../GroupListImages/GroupListImages';
import { ListImages } from '../ListImages/ListImages';
import { selectIsGroup } from '../../redux/selectors';

export const Content = () => {
  const isGroup = useSelector(selectIsGroup);

  return (
    <div className='content'>
      {isGroup ? <GroupListImages /> : <ListImages />}
    </div>
  );
};
