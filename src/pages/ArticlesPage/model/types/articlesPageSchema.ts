import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView, ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  // filter
  order: SortOrder;
  search: string;
  sort: ArticleSortField;
  _inited?: boolean;
}
