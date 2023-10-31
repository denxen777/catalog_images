import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button/Button';
import { getImage } from '../api/api';
import {
  addGroupImages,
  addImage,
  setSearchValue,
  setTimerId,
} from '../redux/reducer';
import {
  selectImages,
  selectSearchValue,
  selectTimerId,
} from '../redux/selectors';
import { getGroupImages } from '../utils/getGroupImages';
import { getRandomTag } from '../utils/getRandomTag';
import { IImageData } from '../redux/interfaces';

export const DownloadButton = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const images = useSelector(selectImages);
  const timerId = useSelector(selectTimerId);

  const { refetch, isFetching } = useQuery({
    queryKey: ['image'],
    queryFn: () => getImage(searchValue),
    enabled: false,
    onSuccess: data => {
      const res: IImageData[] = [];

      data.forEach(img => {
        if (img.images == null) {
          alert('По тегу ничего не найдено');
          return;
        }

        const imageData: IImageData = {
          id: img.id,
          images: img.images,
          tag: searchValue,
        };

        res.push(imageData);
      });

      dispatch(addImage(res));
    },
    onError: (err: any) =>
      alert('Произошла http ошибка: ' + err.response.status),
  });

  useEffect(() => {
    const groupImages = getGroupImages(images);
    dispatch(addGroupImages(groupImages));
    console.log(groupImages);
    return () => clearInterval(timerId);
  }, [images]);

  const onClick = async () => {
    if (searchValue == null || searchValue === '') {
      alert('заполните поле "тег"');
    }

    if (searchValue === 'delay') {
      const timerId = window.setInterval(async () => {
        const randomTag = getRandomTag();
        dispatch(setSearchValue(randomTag));

        await refetch();
      }, 5000);
      dispatch(setTimerId(timerId));
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
