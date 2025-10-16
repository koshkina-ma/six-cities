import { CommentType } from '../types';

export const mockComments: CommentType[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque place with a beautiful canal view.',
    rating: 4
  },
  {
    id: 'a12ef7cd-3245-4b89-bcde-12ab34cd56ef',
    date: '2020-03-12T10:45:30.123Z',
    user: {
      name: 'Sophie Martin',
      avatarUrl: 'https://url-to-image/image2.png',
      isPro: true
    },
    comment: 'Lovely apartment, clean and close to all attractions.',
    rating: 5
  },
  {
    id: 'c45de678-89ab-4cde-9012-34bc56de78fa',
    date: '2021-07-19T09:22:14.569Z',
    user: {
      name: 'Luca Rossi',
      avatarUrl: 'https://url-to-image/image3.png',
      isPro: false
    },
    comment: 'Spacious and modern, but a bit noisy at night.',
    rating: 3
  },
  {
    id: 'd56ef789-12bc-4def-8901-23cd45ef67ab',
    date: '2022-11-01T16:33:42.999Z',
    user: {
      name: 'Anna Kowalska',
      avatarUrl: 'https://url-to-image/image4.png',
      isPro: true
    },
    comment: 'Excellent location and friendly host, highly recommend!',
    rating: 5
  },
  {
    id: 'e67fa890-23cd-45ef-9012-34de56fa78bc',
    date: '2023-09-22T08:05:10.321Z',
    user: {
      name: 'James Wilson',
      avatarUrl: 'https://url-to-image/image5.png',
      isPro: false
    },
    comment: 'Comfortable stay, great value for money.',
    rating: 4
  }
];
