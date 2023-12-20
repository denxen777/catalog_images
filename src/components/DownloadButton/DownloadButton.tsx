import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button/Button';
import { getImages } from '../../api/ImageService';
import { addImage, setSearchValue, setTimerId } from '../../redux/reducer';
import { selectSearchValue } from '../../redux/selectors';
import { getRandomTag } from '../../utils/getRandomTag';
import { IImageData } from '../../redux/interfaces';
import { useMyQuery } from '../../hooks/useMyQuery';
import {IResponseData} from "../../api/interfaces";

export const DownloadButton = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  const { refetch, isLoading } = useMyQuery<IResponseData[]>({
    enabled: false,
    queryFn: () => getImages(searchValue),
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
      }, 5000);
      dispatch(setTimerId(timerId));
      return;
    }

    await refetch();
  };

  return (
    <Button color='green' disabled={isLoading} onClick={onClick}>
      {isLoading ? 'Загрузка...' : 'Загрузить'}
    </Button>
  );
};
