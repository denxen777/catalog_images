import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GroupListImages } from '../GroupListImages/GroupListImages';
import { ListImages } from '../ListImages/ListImages';
import { selectIsGroup } from '../../redux/selectors';
import { setSearchValue } from '../../redux/reducer';

export const Content = () => {
  const dispatch = useDispatch();
  const isGroup = useSelector(selectIsGroup);

  const onClickSetTag = (tag: string) => {
    return () => dispatch(setSearchValue(tag));
  };

  return (
    <div className='content'>
      <div className='content__list'>
        {isGroup ? (
          <GroupListImages onClickSetTag={onClickSetTag} />
        ) : (
          <ListImages onClickSetTag={onClickSetTag} />
        )}
      </div>
    </div>
  );
};
