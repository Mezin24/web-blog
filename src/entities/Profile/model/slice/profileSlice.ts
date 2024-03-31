import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
};

const profiileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setEdit: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, { payload }: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, { payload }: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
      }
    );
    builder.addCase(fetchProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: profileActions } = profiileSlice;
export const { reducer: profileReducer } = profiileSlice;
