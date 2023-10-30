import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button';
import { getImage } from '../api/api';
import { addImage } from '../redux/reducer';
import { selectSearchValue } from '../redux/selectors';

interface IDownloadButton {}

export const DownloadButton: FC<IDownloadButton> = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  const { refetch, isFetching } = useQuery({
    queryKey: ['image'],
    queryFn: () => getImage(searchValue),
    enabled: false,
    onSuccess: res => {
      const { images } = res;

      if (images == null) {
        alert('По тегу ничего не найдено');
        return;
      }
      dispatch(addImage(images.downsized.url));
    },
    onError: (err: any) => {
      alert('Произошла http ошибка: ' + err.response.status);
    },
  });

  const onClick = async () => {
    if (searchValue == null || searchValue === '') {
      alert('заполните поле "тег"');
      return;
    }

    await refetch();
  };

  return (
    <Button color='green' disabled={isFetching} onClick={onClick}>
      {isFetching ? 'Загрузка...' : 'Загрузить'}
    </Button>
  );
};
