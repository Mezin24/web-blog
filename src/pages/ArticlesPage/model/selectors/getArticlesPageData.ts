import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;

export const getArticlesPagePage = (state: StateSchema) =>
  state.articlesPage?.page;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.SMALL;

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error || '';
