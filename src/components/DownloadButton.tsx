import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button/Button';
import { getImage } from '../api/api';
import { addGroupImages, addImage } from '../redux/reducer';
import { selectImages, selectSearchValue } from '../redux/selectors';
import { getGroupImages } from '../utils/getGroupImages';
import { IImageData } from '../redux/interfaces';

export const DownloadButton = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const images = useSelector(selectImages);

  const { refetch, isFetching } = useQuery({
    queryKey: ['image'],
    queryFn: () => getImage(searchValue),
    enabled: false,
    onSuccess: data => {
      if (data.images == null) {
        alert('По тегу ничего не найдено');
        return;
      }
      const imageData: IImageData = {
        id: data.id,
        images: data.images,
        tag: searchValue,
      };

      dispatch(addImage(imageData));
    },
    onError: (err: any) => {
      alert('Произошла http ошибка: ' + err.response.status);
    },
  });

  useEffect(() => {
    const groupImages = getGroupImages(images);
    dispatch(addGroupImages(groupImages));
  }, [images]);

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
