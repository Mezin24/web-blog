import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should retern profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('123');
  });
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
