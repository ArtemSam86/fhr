import clubsServiceMap from '@/services/clubs/clubsService.map.ts';
import api from '@/services/api';
import type { IClub } from '@/stores/tables/types.ts';

interface IClubsService {
  fetchClubs: () => Promise<IClub[]>;
  fetchClubById: (id: string) => Promise<IClub>;
}

const dataClubs: IClub[] = [
  {
    id: '1',
    logoUrl: 'https://s3.fhmoscow.com/club/logo/40.png?v=1703856162',
    name: 'ЦСКА',
    city: 'Москва',
    points: 50,
  },
  {
    id: '2',
    logoUrl: 'https://s3.fhmoscow.com/club/logo/24.png?v=1703805685',
    name: 'Динамо',
    city: 'Москва',
    points: 35,
  },
  {
    id: '3',
    logoUrl: 'https://s3.fhmoscow.com/club/logo/64.png?v=1704115447',
    name: 'Локомотив',
    city: 'Ярославль',
    points: 52,
  },
  {
    id: '4',
    logoUrl: 'https://s3.fhmoscow.com/club/logo/60.png?v=1704114624',
    name: 'Спартак',
    city: 'Москва',
    points: 40,
  },
  {
    id: '5',
    logoUrl: 'https://s3.fhmoscow.com/club/logo/66337.png?v=1756887902',
    name: 'Крылья-Советов',
    city: 'Москва',
    points: 25,
  },
];

class ClubsService implements IClubsService {
  async fetchClubById (id: string): Promise<IClub> {
    const response = await api.get<IClub>(clubsServiceMap.club(id));
    console.log('>>>data', response);
    return response.data || dataClubs.filter((c) => c.id === id)[0];
  }

  async fetchClubs() {
    const response = await api.get<IClub[]>(clubsServiceMap.clubs);
    console.log('>>>data', response);
    return response.data || dataClubs;
  }
}

export default new ClubsService();