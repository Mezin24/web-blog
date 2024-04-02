import { DeepPartial } from '@reduxjs/toolkit';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  name: 'Pavel',
  age: 36,
  lastname: 'Test',
  avatar: 'https://orhaajans.com/wp-content/uploads/2020/01/ozz-1024x614_c.jpg',
  city: 'Obnisk',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  username: 'username',
};

describe('profileSlice', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
      readonly: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
      data,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ data, form: data, readonly: true, validateErrors: undefined });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'test' })
      )
    ).toEqual({ form: { username: 'test' } });
  });

  test('update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
  test('update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
