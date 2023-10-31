import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from './Button/Button';
import { setSearchValue, clearImages } from '../redux/reducer';

export const ClearButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setSearchValue(''));
    dispatch(clearImages());
  };

  return (
    <Button color='red' onClick={onClick}>
      Очистить
    </Button>
  );
};
