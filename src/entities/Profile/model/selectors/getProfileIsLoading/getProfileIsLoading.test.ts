import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should retern loading state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
