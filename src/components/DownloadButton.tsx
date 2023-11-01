import React, { useEffect, useRef } from 'react';
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

  const { refetch, isFetching } = useQuery({
    queryKey: ['image'],
    queryFn: () => getImages(searchValue),
    enabled: false,
    onSuccess: data => {
      const result: IImageData[] = [];

      data.forEach(val => {
        if (val.data.id == null) {
          alert('По тегу ничего не найдено');
          return;
        }

        const imageData: IImageData = {
          id: val.data.id,
          images: val.data.images,
          tag: val.tag,
        };

        result.push(imageData);
      });

      if (!!result.length) dispatch(addImage(result));
    },
    onError: (err: any) => alert('Произошла http ошибка: ' + err),
  });

  useEffect(() => {
    const groupImages = getGroupImages(images);
    dispatch(addGroupImages(groupImages));
  }, [images]);

  const onClick = async () => {
    const result = /^,+$/.test(searchValue);
    if (searchValue == null || searchValue === '' || result) {
      alert('заполните поле "тег"');
      return;
    }

    if (searchValue === 'delay') {
      dispatch(setSearchValue(getRandomTag()));
      const timerId = window.setInterval(async () => {
        dispatch(setSearchValue(getRandomTag()));
        await refetch();
      }, 3000);
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
