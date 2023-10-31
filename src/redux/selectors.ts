import { TRootState } from './store';

export const selectSearchValue = (state: TRootState) =>
  state.catalog.searchValue;

export const selectImages = (state: TRootState) => state.catalog.images;

export const selectIsGroup = (state: TRootState) => state.catalog.isGroup;

export const selectGroupImages = (state: TRootState) =>
  state.catalog.groupImages;

export const selectTimerId = (state: TRootState) => state.catalog.timerId;
