import { UserType } from './types';

const URL_MARKER_DEFAULT = '../markup/img/pin.svg';
const URL_MARKER_ACTIVE = '../markup/img/pin-active.svg';

const TIMEOUT_SHOW_ERROR = 20000; //TODO время показа ошибки, тоже на удаление

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

enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

//TODO удалить юзера
const user: UserType = {
  name: 'Mary K',
  avatarUrl: 'https://url-to-image/image.png',
  isPro:  false,
  email: 'MaryK@gmail.com',
  favoriteCount: 3,
  isLoggedIn: true,
  hideUserNav: false,
  token: '1'
};

enum NameSpace {
User = 'USER',
Main = 'MAIN',
Favorite = 'FAVORITE',
Offer = 'OFFER',
Comments = 'COMMENTS',
App = 'APP',
}

export {
  CITIES,
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  user,
  URL_MARKER_DEFAULT,
  URL_MARKER_ACTIVE,
  SORT_TYPES,
  TIMEOUT_SHOW_ERROR,
  NameSpace,
};


