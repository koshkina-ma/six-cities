import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {State} from '../types/state.js';
import {
  OfferType,
  OfferDetailType,
  AuthType,
  UserType,
  CommentType,
  CommentFormDataType
} from '../types';
import {saveToken, dropToken} from '../services/token';
import {APIRoute} from '../const';
import { getErrorMessage } from '../utils';
import { setError } from './app/app-slice';

// ===== LOAD OFFERS =====
export const fetchOffersAction = createAsyncThunk<
  OfferType[],
  void,
  { state: State; extra: AxiosInstance}
  >(
    'main/fetchOffers',
    async (_arg, { extra: api, dispatch }) => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); //TODO искусственное замедление для теста лоадера

      try {
        const { data } = await api.get<OfferType[]>(APIRoute.Offers);
        return data;
      } catch (error: unknown) {
        const message = getErrorMessage(error);
        if (message) {
          dispatch(setError(message));
        }
        throw error;
      }
    }
  );

// ===== LOAD FAVORITES =====
export const fetchFavoriteOffersAction = createAsyncThunk<
  OfferType[],
  void,
  { state: State; extra: AxiosInstance}
>(
  'favorite/fetchFavorites',
  async (_arg, { extra: api, dispatch }) => {
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
      return data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      if (message) {
        dispatch(setError(message));
      }
      throw error;
    }
  }
);

// ===== AUTH =====
export const checkAuthAction = createAsyncThunk<
{ email: string; favoriteCount: number },
undefined,
{ state: State; extra: AxiosInstance}
>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<UserType>(APIRoute.Login);
    const { data: favorites } = await api.get<OfferType[]>(APIRoute.Favorite);
    return { email: response.data.email, favoriteCount: favorites.length };
  },
);

// ===== CHANGE FAVORITE STATUS =====
export const changeFavoriteStatusAction = createAsyncThunk<
  OfferDetailType,
  { offerId: string; status: 0 | 1 },
  { state: State; extra: AxiosInstance}
>(
  'favorite/changeStatus',
  async ({ offerId, status }, { extra: api, dispatch }) => {
    try {
      const { data } = await api.post<OfferDetailType>(`${APIRoute.Favorite}/${offerId}/${status}`);
      dispatch(checkAuthAction());
      return data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      if (message) {
        dispatch(setError(message));
      }
      throw error;
    }
  }
);

// ===== LOAD SINGLE OFFER =====
export const fetchOfferAction = createAsyncThunk<
OfferDetailType,
string,
{ state: State; extra: AxiosInstance }
>(
  'offer/fetchOffer',
  async (offerId, { extra: api, dispatch }) => {
    try {
      const { data } = await api.get<OfferDetailType>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      if (message) {
        dispatch(setError(message));
      }
      throw error;
    }
  }
);


// ===== LOAD NEAR OFFERS =====
export const fetchNearOffersAction = createAsyncThunk<
OfferType[],
string,
{ state: State; extra: AxiosInstance}
>(
  'offer/fetchNearOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

// ===== LOAD COMMENTS =====
export const fetchCommentsAction = createAsyncThunk<
CommentType[],
string,
{ state: State; extra: AxiosInstance}
>(
  'comments/fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CommentType[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

// ===== SEND COMMENT =====
export const sendCommentAction = createAsyncThunk<
CommentType[],
{ offerId: string; commentData: CommentFormDataType },
{ state: State; extra: AxiosInstance}
>(
  'comments/sendComment',
  async ({ offerId, commentData }, { extra: api, dispatch }) => {
    try {
      const { data } = await api.post<CommentType[]>(`${APIRoute.Comments}/${offerId}`, commentData);
      return data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      if (message) {
        dispatch(setError(message));
      }
      throw error;
    }
  }
);


export const loginAction = createAsyncThunk<
{ email: string; favoriteCount: number },
AuthType,
{ state: State; extra: AxiosInstance}
>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const response = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(response.data.token);
    const { data: favorites } = await api.get<OfferType[]>(APIRoute.Favorite);
    return { email: response.data.email, favoriteCount: favorites.length };
    //TODO проверить, как будет хеадер отображаться, если не передавать этот хайдюзер нав
    //  return {
    //   ...response.data,
    //   isLoggedIn: true,
    //   hideUserNav: false
    // };
  }
);

export const logoutAction = createAsyncThunk<
void,
undefined,
{ state: State; extra: AxiosInstance}
>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);


//TODO проверить на вывод ошибок
