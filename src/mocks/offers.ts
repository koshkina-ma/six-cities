// import { OfferType } from '../types';

// const mockOffers: OfferType[] = [
//   {
//     id: '2b3f7c9d-1234-4a56-89ab-1c2d3e4f5678',
//     title: 'Cozy loft in Paris',
//     type: 'house',
//     price: 150,
//     city: {
//       name: 'Amsterdam',
//       location: {
//         latitude: 52.3676,
//         longitude: 4.9041,
//         zoom: 12
//       }
//     },
//     location: {
//       latitude: 52.3909553943508,
//       longitude: 4.85309666406198,
//       zoom: 8
//     },
//     isFavorite: true,
//     isPremium: true,
//     rating: 5,
//     description: 'A cozy loft near the Eiffel Tower, perfect for couples.',
//     bedrooms: 2,
//     goods: ['Wifi', 'Heating', 'Kitchen'],
//     host: {
//       name: 'Alice Dupont',
//       avatarUrl: 'https://url-to-image/image2.png',
//       isPro: true
//     },
//     images: ['img/apartment-01.jpg', 'https://url-to-image/image2-2.png'],
//     maxAdults: 3
//   },
//   {
//     id: '3c4d5e6f-2345-4567-90ab-2c3d4e5f6789',
//     title: 'Modern apartment in Berlin',
//     type: 'apartment',
//     price: 90,
//     city: {
//       name: 'Amsterdam',
//       location: {
//         latitude: 52.3676,
//         longitude: 4.9041,
//         zoom: 8
//       }
//     },
//     location: {
//       latitude: 52.3609553943508,
//       longitude: 4.85309666406198,
//       zoom: 8
//     },
//     isFavorite: false,
//     isPremium: false,
//     rating: 4.2,
//     description: 'Bright and modern apartment in the city center.',
//     bedrooms: 1,
//     goods: ['Wifi', 'Washing machine'],
//     host: {
//       name: 'Max Müller',
//       avatarUrl: 'https://url-to-image/image3.png',
//       isPro: false
//     },
//     images: ['img/room.jpg', 'https://url-to-image/image3-2.png'],
//     maxAdults: 2
//   },
//   {
//     id: '4d5e6f7a-3456-5678-01bc-3d4e5f678901',
//     title: 'Charming villa in Rome',
//     type: 'house',
//     price: 250,
//     city: {
//       name: 'Amsterdam',
//       location: {
//         latitude: 52.3676,
//         longitude: 4.9041,
//         zoom: 8
//       }
//     },
//     location: {
//       latitude: 52.3909553943508,
//       longitude: 4.929309666406198,
//       zoom: 8
//     },
//     isFavorite: true,
//     isPremium: true,
//     rating: 4.8,
//     description: 'Spacious villa with a garden and a terrace near the Colosseum.',
//     bedrooms: 4,
//     goods: ['Wifi', 'Kitchen', 'Parking', 'Air conditioning'],
//     host: {
//       name: 'Giulia Rossi',
//       avatarUrl: 'https://url-to-image/image4.png',
//       isPro: true
//     },
//     images: ['img/apartment-02.jpg', 'https://url-to-image/image4-2.png'],
//     maxAdults: 6
//   },
//   {
//     id: '5e6f7a8b-4567-6789-12cd-4e5f67890123',
//     title: 'Seaside apartment in Barcelona',
//     type: 'apartment',
//     price: 180,
//     city: {
//       name: 'Amsterdam',
//       location: {
//         latitude: 52.3676,
//         longitude: 4.9041,
//         zoom: 8
//       }
//     },
//     location: {
//       latitude: 52.3809553943508,
//       longitude: 4.939309666406198,
//       zoom: 8
//     },
//     isFavorite: false,
//     isPremium: true,
//     rating: 4.6,
//     description: 'Modern apartment with a sea view and walking distance to the beach.',
//     bedrooms: 2,
//     goods: ['Wifi', 'Kitchen', 'Air conditioning', 'Washer'],
//     host: {
//       name: 'Carlos Gómez',
//       avatarUrl: 'https://url-to-image/image5.png',
//       isPro: true
//     },
//     images: ['img/apartment-03.jpg', 'https://url-to-image/image5-2.png'],
//     maxAdults: 4
//   },
//   // Paris
//   {
//     id: 'paris-01',
//     title: 'Romantic apartment in Paris',
//     type: 'apartment',
//     price: 200,
//     city: {
//       name: 'Paris',
//       location: {
//         latitude: 48.8566,
//         longitude: 2.3522,
//         zoom: 12
//       }
//     },
//     location: {
//       latitude: 48.8606,
//       longitude: 2.3376,
//       zoom: 12
//     },
//     isFavorite: false,
//     isPremium: true,
//     rating: 4.7,
//     description: 'Charming apartment near the Louvre.',
//     bedrooms: 1,
//     goods: ['Wifi', 'Kitchen', 'Washer'],
//     host: {
//       name: 'Jean Martin',
//       avatarUrl: 'https://url-to-image/image-paris.png',
//       isPro: true
//     },
//     images: ['img/apartment-01.jpg'],
//     maxAdults: 2
//   },
//   // Cologne
//   {
//     id: 'cologne-01',
//     title: 'Modern flat in Cologne',
//     type: 'apartment',
//     price: 120,
//     city: {
//       name: 'Cologne',
//       location: {
//         latitude: 50.9375,
//         longitude: 6.9603,
//         zoom: 12
//       }
//     },
//     location: {
//       latitude: 50.9400,
//       longitude: 6.9600,
//       zoom: 12
//     },
//     isFavorite: false,
//     isPremium: false,
//     rating: 4.2,
//     description: 'Bright and modern flat in central Cologne.',
//     bedrooms: 2,
//     goods: ['Wifi', 'Kitchen'],
//     host: {
//       name: 'Lukas Schmidt',
//       avatarUrl: 'https://url-to-image/image-cologne.png',
//       isPro: false
//     },
//     images: ['img/apartment-01.jpg'],
//     maxAdults: 4
//   },
//   // Brussels
//   {
//     id: 'brussels-01',
//     title: 'Cozy studio in Brussels',
//     type: 'studio',
//     price: 100,
//     city: {
//       name: 'Brussels',
//       location: {
//         latitude: 50.8503,
//         longitude: 4.3517,
//         zoom: 12
//       }
//     },
//     location: {
//       latitude: 50.8510,
//       longitude: 4.3520,
//       zoom: 12
//     },
//     isFavorite: true,
//     isPremium: false,
//     rating: 4.5,
//     description: 'Comfortable studio in the city center.',
//     bedrooms: 1,
//     goods: ['Wifi', 'Heating'],
//     host: {
//       name: 'Marie Dupont',
//       avatarUrl: 'https://url-to-image/image-brussels.png',
//       isPro: true
//     },
//     images: ['img/apartment-01.jpg'],
//     maxAdults: 2
//   },
//   // Hamburg
//   {
//     id: 'hamburg-01',
//     title: 'Stylish loft in Hamburg',
//     type: 'loft',
//     price: 130,
//     city: {
//       name: 'Hamburg',
//       location: {
//         latitude: 53.5511,
//         longitude: 9.9937,
//         zoom: 12
//       }
//     },
//     location: {
//       latitude: 53.5520,
//       longitude: 9.9950,
//       zoom: 12
//     },
//     isFavorite: false,
//     isPremium: true,
//     rating: 4.6,
//     description: 'Stylish loft near the port of Hamburg.',
//     bedrooms: 2,
//     goods: ['Wifi', 'Kitchen', 'Air conditioning'],
//     host: {
//       name: 'Hans Müller',
//       avatarUrl: 'https://url-to-image/image-hamburg.png',
//       isPro: true
//     },
//     images: ['img/apartment-01.jpg'],
//     maxAdults: 4
//   },
//   // Dusseldorf
//   {
//     id: 'dusseldorf-01',
//     title: 'Modern apartment in Dusseldorf',
//     type: 'apartment',
//     price: 110,
//     city: {
//       name: 'Dusseldorf',
//       location: {
//         latitude: 51.2277,
//         longitude: 6.7735,
//         zoom: 12
//       }
//     },
//     location: {
//       latitude: 51.2280,
//       longitude: 6.7750,
//       zoom: 12
//     },
//     isFavorite: false,
//     isPremium: false,
//     rating: 4.3,
//     description: 'Cozy modern apartment in central Dusseldorf.',
//     bedrooms: 1,
//     goods: ['Wifi', 'Heating'],
//     host: {
//       name: 'Anna Becker',
//       avatarUrl: 'https://url-to-image/image-dusseldorf.png',
//       isPro: false
//     },
//     images: ['img/apartment-01.jpg'],
//     maxAdults: 2
//   },
// ];

// export { mockOffers };
