import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSort,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageData';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticleList',
  async (props, { rejectWithValue, extra, getState }) => {
    const limit = getArticlesPageLimit(getState());

    try {
      const sort = getArticlesPageSort(getState());
      const order = getArticlesPageOrder(getState());
      const search = getArticlesPageSearch(getState());
      const page = getArticlesPagePage(getState());
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _search: search,
          _order: order,
          _sort: sort,
          q: search,
        },
      });

      if (!data) {
        throw new Error('no data');
      }
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
