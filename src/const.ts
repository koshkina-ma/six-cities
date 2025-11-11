import { UserType } from './types';

const URL_MARKER_DEFAULT = '../markup/img/pin.svg';
const URL_MARKER_ACTIVE = '../markup/img/pin-active.svg';

const Setting = {
  OffersCount: 15
};

const SORT_TYPES = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

enum AppRoute {
Root = '/',
Login = '/login',
Favorites = '/favorites',
Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const user: UserType = {
  name: 'Mary K',
  avatarUrl: 'https://url-to-image/image.png',
  isPro:  false,
  email: 'MaryK@gmail.com',
  favoriteCount: 3,
  isLoggedIn: true, //TODO никак не связано с авторизацией, сейчас просто руками проставлено NoAuth в app.tsx
  hideUserNav: false
};

export {
  Setting,
  CITIES,
  AppRoute,
  AuthorizationStatus,
  user,
  URL_MARKER_DEFAULT,
  URL_MARKER_ACTIVE,
  SORT_TYPES
};
