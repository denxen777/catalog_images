import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button/Button';
import { getImages } from '../api/ImageService';
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
    queryFn: () => getImages(searchValue),
    enabled: false,
    onSuccess: data => {
      console.log(data);
      const res: IImageData[] = [];

      data.forEach(img => {
        if (img.data.images == null) {
          alert('По тегу ничего не найдено');
          return;
        }

        const imageData: IImageData = {
          id: img.data.id,
          images: img.data.images,
          tag: img.tag,
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
