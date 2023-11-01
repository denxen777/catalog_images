import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button/Button';
import { selectIsGroup } from '../redux/selectors';
import { setIsGroup } from '../redux/reducer';

export const GroupButton = () => {
  const dispatch = useDispatch();
  const isGroup = useSelector(selectIsGroup);

  return (
    <Button color='blue' onClick={() => dispatch(setIsGroup(!isGroup))}>
      {isGroup ? 'Разгруппировать' : 'Группировать'}
    </Button>
  );
};
