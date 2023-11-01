import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button/Button';
import { clearImages, setSearchValue } from '../redux/reducer';
import { selectTimerId } from '../redux/selectors';

export const ClearButton = () => {
  const dispatch = useDispatch();
  const timerId = useSelector(selectTimerId);

  const onClick = () => {
    dispatch(setSearchValue(''));
    dispatch(clearImages());
    if (timerId !== null) {
      clearInterval(timerId);
    }
  };

  return (
    <Button color='red' onClick={onClick}>
      Очистить
    </Button>
  );
};
