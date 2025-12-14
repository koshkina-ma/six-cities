import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { CommentType } from '../../types';

export const getComments = (state: State): CommentType[] => state[NameSpace.Comments].comments;
export const getIsCommentsLoading = (state: State): boolean => state[NameSpace.Comments].isCommentsLoading;
