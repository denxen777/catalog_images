import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICatalogState, IImageData, TGroupImages } from './interfaces';

const initialState: ICatalogState = {
  isGroup: false,
  searchValue: '',
  images: [],
  groupImages: {},
};

const reducer = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<IImageData>) => {
      state.images.push(action.payload);
    },
    addGroupImages: (state, action: PayloadAction<TGroupImages>) => {
      state.groupImages = action.payload;
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
  },
});

export const {
  setSearchValue,
  addImage,
  clearImages,
  addGroupImages,
  setIsGroup,
} = reducer.actions;

export default reducer.reducer;
