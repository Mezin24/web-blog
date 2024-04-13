import { Dispatch, EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema';
import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { CombinedState, Reducer, ReducersMapObject } from 'redux';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: any) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
  state: StateSchema;
}
