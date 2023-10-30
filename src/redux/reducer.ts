import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICatalogState } from './interfaces';

const initialState: ICatalogState = {
  searchValue: '',
  images: [],
};

const reducer = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    addImage: (state, action: PayloadAction<string>) => {
      state.images.push(action.payload);
    },
    clearImages: state => {
      state.images = [];
    },
  },
});

export const { setSearchValue, addImage, clearImages } = reducer.actions;

export default reducer.reducer;
