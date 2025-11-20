import { createReducer } from '@reduxjs/toolkit';
import { setCity, setUser, setOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { OfferType, UserType, CommentType } from '../types';
import { CITIES, AuthorizationStatus } from '../const';

type AppStateType = {
  city: string;
  offers: OfferType[];
  comments: CommentType[];
  isLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  user: UserType | null;
};

const initialState: AppStateType = {
  city: CITIES[0],
  offers: [],
  comments: [],
  isLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};


const reducer = createReducer<AppStateType>(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

