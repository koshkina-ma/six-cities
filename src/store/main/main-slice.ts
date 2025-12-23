import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, CITIES} from '../../const';
import {MainSliceType} from '../../types/state';
import {OfferType} from '../../types';
import { changeFavoriteStatusAction, fetchOffersAction } from '../api-actions';

const initialState: MainSliceType = {
  city: CITIES[0],
  offers: [],
  isOffersDataLoading: false,
};

export const mainSlice = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    //TODO удалить? setOffers: (state, action: PayloadAction<OfferType[]>) => {
    //   state.offers = action.payload;
    // },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.offers = [];
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.offers = state.offers.map((offer) => (
          offer.id === action.payload.id ? { ...offer, isFavorite: action.payload.isFavorite } : offer
        ));
      });
  }
});

export const {setCity, setOffersDataLoadingStatus} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
