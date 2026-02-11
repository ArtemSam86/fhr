import clubsService from '@/services/clubs/clubsService.ts';

interface IServices {
  clubsService: typeof clubsService;
}

const services: IServices = { clubsService }

export default services;