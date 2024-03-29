import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (_, { rejectWithValue, dispatch, extra }) => {
    try {
      const { data } = await extra.api.get<Profile>('/profile');
      console.log(data);

      if (!data) {
        throw new Error();
      }
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
