import { ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        hasMore: true,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
        _inited: false,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toBeCalledWith({ page: 1 });
  });

  test('fetchArticleList not called when already inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        hasMore: false,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
        _inited: true,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
