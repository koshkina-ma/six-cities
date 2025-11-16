import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, requireAuthorization } from './action';
import { fetchOffersAction } from './api-actions';
import { OfferType } from '../types';
import { CITIES, AuthorizationStatus } from '../const';

type AppStateType = {
  city: string;
  offers: OfferType[];
  isLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
};

const initialState: AppStateType = {
  city: CITIES[0],
  offers: [],
  isLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};


const reducer = createReducer<AppStateType>(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Failed to load offers. Please try again later.';
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};

