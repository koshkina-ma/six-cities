import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, fetchOffers } from './action';
import { OfferType } from '../types';
import { CITIES } from '../const';

type AppStateType = {
  city: string;
  offers: OfferType[];
  isLoading: boolean;
  error: string | null;
};

const initialState: AppStateType = {
  city: CITIES[0],
  offers: [],
  isLoading: false,
  error: null,
};

const reducer = createReducer<AppStateType>(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Failed to load offers. Please try again later.';
    });

});

export {reducer};

