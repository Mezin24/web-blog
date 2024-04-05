import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.createThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.payload).toEqual(data);
  });

  test('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.createThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
