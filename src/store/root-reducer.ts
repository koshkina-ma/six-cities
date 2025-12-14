import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

import { userReducer } from './user/user-slice';
import { mainReducer } from './main/main-slice';
import { offerReducer } from './offer/offer-slice';
import { commentsReducer } from './comments/comments-slice';
import { appReducer } from './app/app-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userReducer,
  [NameSpace.Main]: mainReducer,
  [NameSpace.Offer]: offerReducer,
  [NameSpace.Comments]: commentsReducer,
  [NameSpace.App]: appReducer,
});
