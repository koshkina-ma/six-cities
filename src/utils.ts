import { CommentType, OfferType } from './types';
import { SORT_TYPES } from './const';

const formatDateToMonthYear = (dateString: string): string => {
  const d = new Date(dateString);
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(d);
};

const getLatestComments = (comments: CommentType[], limit = 10): CommentType[] => [...comments]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, limit);

const sortByPriceLowToHigh = (offers: OfferType[]) =>
  [...offers].sort((a, b) => a.price - b.price);

const sortByPriceHighToLow = (offers: OfferType[]) =>
  [...offers].sort((a, b) => b.price - a.price);

const sortByRating = (offers: OfferType[]) =>
  [...offers].sort((a, b) => b.rating - a.rating);

const sortOffers = (offers: OfferType[], sortType: string): OfferType[] => {
  switch (sortType) {
    case SORT_TYPES.PRICE_LOW_TO_HIGH:
      return sortByPriceLowToHigh(offers);
    case SORT_TYPES.PRICE_HIGH_TO_LOW:
      return sortByPriceHighToLow(offers);
    case SORT_TYPES.TOP_RATED_FIRST:
      return sortByRating(offers);
    default:
      return offers;
  }
};

const getErrorMessage = (err: unknown): string | undefined => {
  if (typeof err === 'object' && err !== null) {
    return (err as { response?: { data?: { message?: string } } }).response?.data?.message;
  }
  return undefined;
};

export {
  formatDateToMonthYear,
  getLatestComments,
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  sortByRating,
  sortOffers,
  getErrorMessage
};

