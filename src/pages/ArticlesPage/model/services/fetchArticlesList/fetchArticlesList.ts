import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/getArticlesPageData';

interface FetchArticlesListProps {
  page: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticleList',
  async (props, { rejectWithValue, extra, getState }) => {
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());
    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
