
import {createAction} from '@reduxjs/toolkit';
import { OfferType } from '../types';
import {AuthorizationStatus} from '../const';

const setCity = createAction<string>('main/setCity');
const setOffers = createAction<OfferType[]>('main/setOffers');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export { setCity, setOffers, requireAuthorization };
