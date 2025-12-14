import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { OfferType } from '../../types';

export const getCity = (state: State): string => state[NameSpace.Main].city;

export const getOffers = (state: State): OfferType[] => state[NameSpace.Main].offers;

export const getIsOffersDataLoading = (state: State): boolean =>
  state[NameSpace.Main].isOffersDataLoading;

export const getOffersByCity = (state: State): OfferType[] => {
  const city = getCity(state);
  const offers = getOffers(state);

  return offers.filter((offer) => offer.city.name === city);
};
