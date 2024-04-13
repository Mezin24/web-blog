import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getSavePageScroll = (state: StateSchema) => state.savePage.scroll;

export const getSavePageScrollByPath = createSelector(
  getSavePageScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
