import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });
  test('with invalid name', async () => {
    const result = validateProfileData({ ...data, name: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test('with invalid age', async () => {
    const result = validateProfileData({ ...data, age: 0 });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test('with invalid country', async () => {
    const result = validateProfileData({ ...data, country: '' as Country });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });
  test('with all invalid data', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
