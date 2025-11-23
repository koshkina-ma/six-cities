import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferType, OfferDetailType, AuthType, UserType, CommentType, CommentFormDataType} from '../types';
import {
  requireAuthorization,
  setOffers,
  setUser,
  setComments,
  setCommentsDataLoadingStatus,
  setOffersDataLoadingStatus,
  setOffer,
  setOfferDataLoadingStatus,
  setNearOffers,
  setError
} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import { getErrorMessage } from '../utils';

// ===== LOAD SINGLE OFFER BY ID =====
export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    dispatch(setOfferDataLoadingStatus(true));
    try {
      const { data } = await api.get<OfferDetailType>(`${APIRoute.Offers}/${id}`);
      dispatch(setOffer(data));
    } catch (error: unknown) {
      dispatch(setOffer(null));
      const message = getErrorMessage(error);
      if (message) {
        dispatch(setError(message));
      }
    } finally {
      dispatch(setOfferDataLoadingStatus(false));
    }
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    await new Promise((resolve) => setTimeout(resolve, 3000)); //TODO искусственное замедление для теста лоадера
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Offers);
      dispatch(setOffers(data));
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      if (message) {
        dispatch(setError(message));
      }
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  },
);

// ===== LOAD NEAR OFFERS =====
export const fetchNearOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(setNearOffers(data));
  }
);

// ===== COMMENTS =====
export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    dispatch(setCommentsDataLoadingStatus(true));
    const {data} = await api.get<CommentType[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setComments(data));
    dispatch(setCommentsDataLoadingStatus(false));
  }
);

export const sendCommentAction = createAsyncThunk<void, { offerId: string; commentData: CommentFormDataType }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({ offerId, commentData }, { dispatch, extra: api }) => {
    try {
      await api.post<CommentType[]>(`${APIRoute.Comments}/${offerId}`, commentData);
      dispatch(fetchCommentsAction(offerId));
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      if (message) {
        dispatch(setError(message));
      }
    }
  }
);


// ===== AUTH =====
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const response = await api.post<UserType>(APIRoute.Login, {email, password});
    const data = response.data;
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser({
      ...data,
      isLoggedIn: true,
      hideUserNav: false
    }));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUser(null));
  },
);


//TODO проверить на вывод ошибок
