import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { OfferDetailType, OfferType } from '../../types';

export const getOffer = (state: State): OfferDetailType | null => state[NameSpace.Offer].offer;

export const getNearOffers = (state: State): OfferType[] => state[NameSpace.Offer].nearOffers;

export const getIsOfferDataLoading = (state: State): boolean => state[NameSpace.Offer].isOfferDataLoading;
