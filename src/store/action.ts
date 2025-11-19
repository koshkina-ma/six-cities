
import {createAction} from '@reduxjs/toolkit';
import { OfferType, CommentType } from '../types';
import { AuthorizationStatus } from '../const';

const setCity = createAction<string>('main/setCity');
const setOffers = createAction<OfferType[]>('main/setOffers');
const setComments = createAction<CommentType[]>('offer/setComments');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setError = createAction<string | null>('app/setError');
const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');

export { setCity, setOffers, setComments, requireAuthorization, setError, setOffersDataLoadingStatus, setCommentsDataLoadingStatus };
