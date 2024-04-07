import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/getArticleDetails/getArticleDetails';
import { ArticleType } from 'entities/Article/model/types/article';

const article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://apprand.com/wp-naughtycontent/uploads/2015/08/maxresdefault.jpg',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [],
};
describe('getArticleDetails', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: article,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  });
  test('should return data with empty data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'true',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('true');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('');
  });
});
