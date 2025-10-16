import { UserType } from './types';

const Setting = {
  OffersCount: 15
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

export { Setting, CITIES, AppRoute, AuthorizationStatus, user };
