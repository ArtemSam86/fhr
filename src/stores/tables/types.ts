export enum TableClubKeys {
  Id = 'id',
  Logo = 'logo',
  Name = 'name',
  City = 'city',
  Points = 'points',
}
export interface IClub extends Record<string, any> {
  id: string;
  logoUrl: string;
  name: string;
  city: string;
  points: number;
}
