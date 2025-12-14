import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, CITIES} from '../../const';
import {MainSliceType} from '../../types/state';
import {OfferType} from '../../types';

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
    setOffers: (state, action: PayloadAction<OfferType[]>) => {
      state.offers = action.payload;
    },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    }
  }
});

export const {setCity, setOffers, setOffersDataLoadingStatus} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
