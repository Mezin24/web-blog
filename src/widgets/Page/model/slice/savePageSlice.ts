import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SavePageSchema } from '../types/savePageShema';

const initialState: SavePageSchema = {
  scroll: {},
};

const savePageSlice = createSlice({
  name: 'save page',
  initialState,
  reducers: {
    setPageScroll: (
      state,
      { payload }: PayloadAction<{ path: string; postition: number }>
    ) => {
      state.scroll[payload.path] = payload.postition;
    },
  },
});

export const { actions: savePageActions, reducer: savePageReducer } =
  savePageSlice;
