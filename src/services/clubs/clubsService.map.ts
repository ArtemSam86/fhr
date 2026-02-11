interface IClubsServiceMap {
  clubs: string;
  club: (id: string) => string;
}

const clubsServiceMap: IClubsServiceMap = { clubs: '/clubs', club: (id) => `/club/${id}` };

export default clubsServiceMap;