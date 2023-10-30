import { TRootState } from './store';

export const selectSearchValue = (state: TRootState) => state.catalog.searchValue;

export const selectImages = (state: TRootState) => state.catalog.images;
