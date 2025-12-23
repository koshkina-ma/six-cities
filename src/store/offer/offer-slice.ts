import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferSliceType} from '../../types/state';
import {OfferDetailType, OfferType} from '../../types';
import { changeFavoriteStatusAction, fetchOfferAction, fetchNearOffersAction } from '../api-actions';

const initialState: OfferSliceType = {
  offer: null,
  isOfferDataLoading: false,
  nearOffers: [],
};

export const offerSlice = createSlice ({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action: PayloadAction<OfferDetailType>) => {
        state.offer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferDataLoading = false;
        state.offer = null;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.nearOffers = action.payload;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action: PayloadAction<OfferDetailType>) => {
        if (state.offer?.id === action.payload.id) {
          state.offer = action.payload;
        }
        state.nearOffers = state.nearOffers.map((offer) => (
          offer.id === action.payload.id ? { ...offer, isFavorite: action.payload.isFavorite } : offer
        ));
      });
  }
}
);

// export const { setOffer, setOfferDataLoadingStatus, setNearOffers } = offerSlice.actions;
export const offerReducer = offerSlice.reducer;
//TODO проверить экспорт экшенов, нужен ли тут, почему не видит их, после редактирования апи экшена
