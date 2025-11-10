import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { OfferType } from '../types';
import { CITIES } from '../const';

type AppStateType = {
  city: string;
  offers: OfferType[];
};

const initialState: AppStateType = {
  city: CITIES[0],
  offers: [],
};

const reducer = createReducer<AppStateType>(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};

