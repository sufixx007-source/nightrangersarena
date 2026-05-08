import { AppGame, DeveloperInfo } from '@/types';

export const APPS_DATA: AppGame[] = [
  {
    id: 'com.nra.turkey.taxi',
    name: 'Taxi Simulator Turkey Car Game',
    icon: '/taxi/icon.png', 
    description: `Experience the life of a taxi driver in our latest taxi simulator game, Taxi Simulator Turkey Car Game. Complete different types of driving missions as a taxi or private taxi driver and pick your favorite car from a selection of over 30 amazing vehicles, with more new cars being added weekly.
    
We take taxi simulation games to a new level with VIP clients, undecided clients and various types of daily and lifetime milestones. Navigate around huge city and adjust your driving style to different types of clients.

Enjoy the stunning graphics and environments in this open-world driving experience. We’ve added features you won’t find in any other taxi simulation games: pedestrians open umbrellas when it rains, there are hundreds of destructible objects, there is a realistic density of cars and people on the sidewalk. Feel like an actual taxi driver with realistic controls and sounds!`,
    rating: '4.8',
    downloads: '1M+',
    url: 'https://play.google.com/store/apps/details?id=com.nra.turkey.taxi',
    screenshots: [
      '/taxi/preview.png'
    ],
    category: 'Simulation',
    isFeatured: true,
  }
];

export const DEVELOPER_DATA: DeveloperInfo = {
  name: 'Night Rangers Arena',
  id: 'Night+Rangers+Arena',
  url: 'https://play.google.com/store/apps/developer?id=Night+Rangers+Arena',
  stats: {
    totalApps: APPS_DATA.length,
    totalDownloads: '2M+',
    avgRating: '4.7',
  },
  description: 'Night Rangers Arena is a premier mobile game development studio dedicated to crafting high-fidelity simulations and immersive gaming experiences. We focus on pushing the boundaries of mobile technology to deliver world-class entertainment.',
};
