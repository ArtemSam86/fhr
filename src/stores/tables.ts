import { defineStore } from 'pinia';
import type { IUseTableClubs } from '@/composables/tables/clubs';
import { useTableClubs } from '@/composables/tables/clubs';

export interface IUseTablesStore extends IUseTableClubs {}

const TABLES = 'tables';

export const useTablesStore = defineStore(TABLES, (): IUseTablesStore => {
  return {
    ...useTableClubs(),
  };
});

// TODO: Стор где будут лежать все таблицы. Выносим конкретную таблицу в хук и примешиваем потом тут
