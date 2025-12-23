import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { OfferType, OfferDetailType, CommentType } from './';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserSliceType = {
  authorizationStatus: AuthorizationStatus;
  user?: {
    email: string;
    favoriteCount: number;
  };
}

export type MainSliceType = {
city: string;
offers: OfferType[];
isOffersDataLoading: boolean;
}

export type FavoritesSliceType = {
  offers: OfferType[];
  isFavoritesDataLoading: boolean;
};

export type OfferSliceType = {
  offer: OfferDetailType | null;
  isOfferDataLoading: boolean;
  nearOffers: OfferType[];
};

export type CommentsSliceType = {
  comments: CommentType[];
  isCommentsLoading: boolean;
};

export type AppSliceType = {
  error: string | null;
};
