import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from '../../types';
import { CommentsSliceType } from '../../types/state';
import { fetchCommentsAction, sendCommentAction } from '../api-actions';

const initialState: CommentsSliceType = {
  comments: [],
  isCommentsLoading: false,
};

export const commentsSlice = createSlice(
  {
    name: 'COMMENTS',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchCommentsAction.pending, (state) => {
          state.isCommentsLoading = true;
        })
        .addCase(fetchCommentsAction.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
          state.comments = action.payload;
          state.isCommentsLoading = false;
        })
        .addCase(fetchCommentsAction.rejected, (state) => {
          state.isCommentsLoading = false;
        })
        .addCase(sendCommentAction.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
          state.comments = action.payload;
        });
    }
  }
);

// export const { setComments, setCommentsDataLoadingStatus } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
//TODO проверить экспорт экшенов, нужен ли тут, почему не видит их, после редактирования апи экшена
