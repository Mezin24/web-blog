import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_USER_KEY } from 'shared/lib/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  _init: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
    },
    initAuthData: (state) => {
      const data = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (data) {
        state.authData = JSON.parse(data);
      }
      state._init = true;
    },
    logout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
