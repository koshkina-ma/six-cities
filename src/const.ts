const Setting = {
  OffersCount: 5
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

const User = {
  name: 'Mary K',
  avatarUrl: 'https://url-to-image/image.png',
  isPro:  false,
  email: 'MaryK@gmail.com',
  favoriteCount: 3,
  isLoggedIn: true,
  hideUserNav: false
};

export { Setting, CITIES, AppRoute, AuthorizationStatus, User };
