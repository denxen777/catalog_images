import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button/Button';
import { selectIsGroup } from '../redux/selectors';
import { setIsGroup } from '../redux/reducer';

export const GroupButton = () => {
  const dispatch = useDispatch();
  const isGroup = useSelector(selectIsGroup);

  const onClick = () => {
    dispatch(setIsGroup(!isGroup));
  };

  return (
    <Button color='blue' onClick={onClick}>
      {isGroup ? 'Разгруппировать' : 'Группировать'}
    </Button>
  );
};
