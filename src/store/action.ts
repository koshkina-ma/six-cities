import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {createAction} from '@reduxjs/toolkit';
import { OfferType } from '../types';

const setCity = createAction<string>('main/setCity');
const setOffers = createAction<OfferType[]>('main/setOffers');

const fetchOffers = createAsyncThunk<OfferType[], undefined, { extra: AxiosInstance }>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>('/offers');
    await new Promise((resolve) => setTimeout(resolve, 2000)); //TODO удалить setTimeout, стоит для проверки Loading...
    return data;
  }
);

export { setCity, setOffers, fetchOffers };
