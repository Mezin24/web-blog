import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should retern profile form', () => {
    const data = {
      name: 'Pavel',
      age: 36,
      lastname: 'Test',
      avatar:
        'https://orhaajans.com/wp-content/uploads/2020/01/ozz-1024x614_c.jpg',
      city: 'Obnisk',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
