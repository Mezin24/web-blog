import { counterActions, counterReducer } from '../slice/counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
  test('should decrement counter value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9,
    });
  });

  test('should increment counter value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
