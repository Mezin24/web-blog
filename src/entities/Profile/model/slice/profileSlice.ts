import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
};

const profiileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profiileSlice;
export const { reducer: profileReducer } = profiileSlice;
