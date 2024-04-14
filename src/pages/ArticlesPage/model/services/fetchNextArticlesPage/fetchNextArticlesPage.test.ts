import { ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('./fetchArticlesList');

describe('fetchNextArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        hasMore: true,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toBeCalledWith({ page: 3 });
  });

  test('fetchArticleList not called when no more articles', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        hasMore: false,
        page: 2,
        limit: 5,
        isLoading: false,
        view: ArticleView.SMALL,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
  test('fetchArticleList not called when no more loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        hasMore: true,
        page: 2,
        limit: 5,
        isLoading: true,
        view: ArticleView.SMALL,
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
