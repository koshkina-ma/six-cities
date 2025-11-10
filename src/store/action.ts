import {createAction} from '@reduxjs/toolkit';
import { OfferType } from '../types';

const setCity = createAction<string>('main/setCity');
const setOffers = createAction<OfferType[]>('main/setOffers');

export { setCity, setOffers };
