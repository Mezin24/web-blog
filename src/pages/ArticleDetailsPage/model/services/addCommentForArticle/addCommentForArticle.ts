import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails/getArticleDetails';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { addCommentFormActions } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'addCommentForm/addCommentForArticle',
  async (text, { rejectWithValue, extra, getState, dispatch }) => {
    try {
      const article = getArticleDetailsData(getState());
      const user = getUserAuthData(getState());

      if (!text || !article || !user) {
        return rejectWithValue('no data');
      }

      const { data } = await extra.api.post<Comment>('/comments', {
        text,
        articleId: article.id,
        userId: user.id,
      });

      dispatch(addCommentFormActions.setText(''));
      dispatch(fetchCommentsByArticleId(article.id));

      if (!data) {
        throw new Error();
      }
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
