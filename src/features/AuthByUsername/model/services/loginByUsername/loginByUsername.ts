import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/lib/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async ({ password, username }, { rejectWithValue, dispatch, extra }) => {
    try {
      const { data } = await extra.api.post<User>('/login', {
        password,
        username,
      });

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
      dispatch(userActions.setUser(data));
      // extra.navigate?.('/about');
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
