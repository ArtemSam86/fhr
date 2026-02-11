import { defineStore } from 'pinia';
import type { IUseTableClubs } from '@/composables/tables/clubs.ts';
import { useTableClubs } from '@/composables/tables/clubs.ts';

export interface IUseTablesStore extends IUseTableClubs {}

const Index = 'tables';

export const useTablesStore = defineStore(Index, (): IUseTablesStore => {
  return {
    ...useTableClubs(),
  };
});

// TODO: Стор где будут лежать все таблицы. Выносим конкретную таблицу в хук и примешиваем потом тут
