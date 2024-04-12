import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

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

describe('updateProfileData', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.payload).toEqual(data);
  });

  test('update error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, lastname: '' } },
    });
    const result = await thunk.callThunk();

    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
