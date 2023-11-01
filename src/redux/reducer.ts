import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICatalogState, IImageData } from './interfaces';

const initialState: ICatalogState = {
  timerId: null,
  isGroup: false,
  searchValue: '',
  images: [],
};

const catalog = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<IImageData[]>) => {
      state.images.push(action.payload);
    },
    clearImages: state => {
      state.images = [];
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setIsGroup: (state, action: PayloadAction<boolean>) => {
      state.isGroup = action.payload;
    },
    setTimerId: (state, action: PayloadAction<number>) => {
      state.timerId = action.payload;
    },
  },
});

export const { setSearchValue, addImage, clearImages, setIsGroup, setTimerId } =
  catalog.actions;

export default catalog.reducer;
