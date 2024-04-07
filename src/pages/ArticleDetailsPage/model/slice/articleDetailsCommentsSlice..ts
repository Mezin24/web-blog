import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        text: 'test 1',
        user: {
          id: '1',
          username: 'Mezin 24',
        },
      },
      2: {
        id: '2',
        text: 'test 2',
        user: {
          id: '2',
          username: 'Mezin 24',
        },
      },
    },
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, { payload }: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, payload);
      }
    );
    builder.addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
