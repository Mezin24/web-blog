import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/getArticlesPageData';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, { getState, dispatch }) => {
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticleList({
        page: 1,
      })
    );
  }
});
