import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from './comments';

describe('comments', () => {
  test('should return getArticleDetailsCommentsIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
        ids: [],
        entities: {},
      },
    };
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(true);
  });
  test('should return getArticleDetailsCommentsIsLoading with emty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        ids: [],
        entities: {},
      },
    };
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(
      false
    );
  });

  test('should return getArticleDetailsCommentsError', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'true',
        ids: [],
        entities: {},
      },
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toBe('true');
  });
  test('should return getArticleDetailsCommentsError with emty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        ids: [],
        entities: {},
      },
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toBe('');
  });
});
