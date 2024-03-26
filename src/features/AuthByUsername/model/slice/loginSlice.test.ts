import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginFormActions, loginFormReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };

    expect(
      loginFormReducer(
        state as LoginSchema,
        loginFormActions.setUsername('123')
      )
    ).toEqual({
      username: '123',
    });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(
      loginFormReducer(
        state as LoginSchema,
        loginFormActions.setPassword('123')
      )
    ).toEqual({
      password: '123',
    });
  });
});
