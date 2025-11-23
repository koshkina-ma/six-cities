
import {createAction} from '@reduxjs/toolkit';
import { UserType, OfferType, OfferDetailType, CommentType } from '../types';
import { AuthorizationStatus } from '../const';

const setCity = createAction<string>('main/setCity');

const setUser = createAction<UserType | null>('user/setUser');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

const setOffers = createAction<OfferType[]>('main/setOffers');
const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

const setComments = createAction<CommentType[]>('offer/setComments');
const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');

const setError = createAction<string | null>('app/setError');

const setOffer = createAction<OfferDetailType | null>('data/setOffer');

const setNearOffers = createAction<OfferType[]>('data/setNearOffers');

const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export {
  setCity,
  setUser,
  setOffers,
  setComments,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  setCommentsDataLoadingStatus,
  setOffer,
  setNearOffers,
  setOfferDataLoadingStatus,
};
