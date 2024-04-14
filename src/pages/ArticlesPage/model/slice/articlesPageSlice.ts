import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article';
import { LOCAL_STORAGE_ARTICLE_LIST_KEY } from 'shared/lib/const/localStorage';
import { SortOrder } from 'shared/types';
import { fetchArticleList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

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
    page: 1,
    hasMore: true,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    _inited: false,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_LIST_KEY, payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setOrder: (state, { payload }: PayloadAction<SortOrder>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortField>) => {
      state.sort = payload;
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLE_LIST_KEY
      ) as ArticleView;
      state.limit = state.view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        if (action.meta.arg.replace) {
          articlesPageAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length > 0;

        if (action.meta.arg.replace) {
          articlesPageAdapter.setAll(state, action.payload);
        } else {
          articlesPageAdapter.addMany(state, action.payload);
        }
      })
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
