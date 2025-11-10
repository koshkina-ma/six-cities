import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { OfferType } from '../types';
import { CITIES } from '../const';


const initialState = {
  city: CITIES[0],
  offers: [] as OfferType[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};

