import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    try {
      const formData = getProfileForm(getState());

      const { data } = await extra.api.put<Profile>('/profile', formData);

      if (!data) {
        throw new Error();
      }
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
