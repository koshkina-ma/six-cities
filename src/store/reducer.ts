import { createReducer } from '@reduxjs/toolkit';
import {
  setCity,
  setUser,
  setOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setOffer,
  setNearOffers,
  setOfferDataLoadingStatus,
} from './action';
import { OfferType, OfferDetailType, UserType, CommentType } from '../types';
import { CITIES, AuthorizationStatus } from '../const';

type AppStateType = {
  city: string;
  offers: OfferType[];
  comments: CommentType[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserType | null;
  offer: OfferDetailType | null;
  nearOffers: OfferType[];
  isOfferDataLoading: boolean;
};

const initialState: AppStateType = {
  city: CITIES[0],
  offers: [],
  comments: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  offer: null,
  nearOffers: [],
  isOfferDataLoading: false,
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
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    });
  // .addCase(setError, (state, action) => {
  //   state.error = action.payload;
  // });
});

export {reducer};

