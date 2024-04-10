import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { fetchArticleList } from '../services/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { LOCAL_STORAGE_ARTICLE_LIST_KEY } from 'shared/lib/const/localStorage';

const articlesPageAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_LIST_KEY, payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLE_LIST_KEY
      ) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchArticleList.fulfilled,
        (state, { payload }: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesPageAdapter.setAll(state, payload);
        }
      )
      .addCase(fetchArticleList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesPageAdapter.getInitialState()
);

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
