import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/lib/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>(
  'login/loginByUsername',
  async ({ password, username }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post<User>('http://localhost:8000/login', {
        password,
        username,
      });

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
      dispatch(userActions.setUser(data));

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
