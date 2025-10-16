import { OfferType } from '../types';

export const mockOffers: OfferType[] = [
  {
    id: '2b3f7c9d-1234-4a56-89ab-1c2d3e4f5678',
    title: 'Cozy loft in Paris',
    type: 'house',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 10
      }
    },
    location: {
      latitude: 48.857,
      longitude: 2.353,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'A cozy loft near the Eiffel Tower, perfect for couples.',
    bedrooms: 2,
    goods: ['Wifi', 'Heating', 'Kitchen'],
    host: {
      name: 'Alice Dupont',
      avatarUrl: 'https://url-to-image/image2.png',
      isPro: true
    },
    images: ['https://url-to-image/image2-1.png', 'https://url-to-image/image2-2.png'],
    maxAdults: 3
  },
  {
    id: '3c4d5e6f-2345-4567-90ab-2c3d4e5f6789',
    title: 'Modern apartment in Berlin',
    type: 'apartment',
    price: 90,
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.52,
        longitude: 13.405,
        zoom: 12
      }
    },
    location: {
      latitude: 52.521,
      longitude: 13.406,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    description: 'Bright and modern apartment in the city center.',
    bedrooms: 1,
    goods: ['Wifi', 'Washing machine'],
    host: {
      name: 'Max Müller',
      avatarUrl: 'https://url-to-image/image3.png',
      isPro: false
    },
    images: ['https://url-to-image/image3-1.png', 'https://url-to-image/image3-2.png'],
    maxAdults: 2
  },
  {
    id: '4d5e6f7a-3456-5678-01bc-3d4e5f678901',
    title: 'Charming villa in Rome',
    type: 'house',
    price: 250,
    city: {
      name: 'Rome',
      location: {
        latitude: 41.9028,
        longitude: 12.4964,
        zoom: 10
      }
    },
    location: {
      latitude: 41.903,
      longitude: 12.497,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: 'Spacious villa with a garden and a terrace near the Colosseum.',
    bedrooms: 4,
    goods: ['Wifi', 'Kitchen', 'Parking', 'Air conditioning'],
    host: {
      name: 'Giulia Rossi',
      avatarUrl: 'https://url-to-image/image4.png',
      isPro: true
    },
    images: ['https://url-to-image/image4-1.png', 'https://url-to-image/image4-2.png'],
    maxAdults: 6
  },
  {
    id: '5e6f7a8b-4567-6789-12cd-4e5f67890123',
    title: 'Seaside apartment in Barcelona',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.3851,
        longitude: 2.1734,
        zoom: 11
      }
    },
    location: {
      latitude: 41.386,
      longitude: 2.174,
      zoom: 11
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    description: 'Modern apartment with a sea view and walking distance to the beach.',
    bedrooms: 2,
    goods: ['Wifi', 'Kitchen', 'Air conditioning', 'Washer'],
    host: {
      name: 'Carlos Gómez',
      avatarUrl: 'https://url-to-image/image5.png',
      isPro: true
    },
    images: ['https://url-to-image/image5-1.png', 'https://url-to-image/image5-2.png'],
    maxAdults: 4
  }
];
