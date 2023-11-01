import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../Input/Input';
import { selectSearchValue } from '../../redux/selectors';
import { setSearchValue } from '../../redux/reducer';
import { DownloadButton } from '../DownloadButton';
import { ClearButton } from '../ClearButton';
import { GroupButton } from '../GroupButton';

export const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  const onChangeSearchValue = (value: string) => {
    const result = /^[a-zA-Z,]*$/.test(value);
    if (result) {
      dispatch(setSearchValue(value));
    }
  };

  return (
    <div className='header'>
      <Input value={searchValue} onChange={onChangeSearchValue} />
      <DownloadButton />
      <ClearButton />
      <GroupButton />
    </div>
  );
};
