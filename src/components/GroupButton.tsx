import React from 'react';
import { Button } from './Button';

export const GroupButton = () => {
  const onClick = () => {
    console.log('group');
  };

  return (
    <Button color='blue' onClick={onClick}>
      Группировать
    </Button>
  );
};
