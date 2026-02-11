/* Libs */
import { computed, type ComputedRef, markRaw, type Ref, ref } from 'vue';
import { useDynamicComponent } from '@/shared/utils/useDynamicComponent';
import { TextColorFill } from '@/shared/lib/text-color-fill';

/* Services */
import services from '@/services';

import type { ITable } from '@/shared/lib/table';
/* Types */
import { GenerateTable, type ITableRow } from '@/shared/lib/table';
import type { SortOrder } from '@/shared/types/common.ts';
import { type IClub, TableClubKeys } from '@/stores/tables/types.ts';

/* Components */
import TableThSort from '@/components/tables/cells/TableThSort.vue';
import TableTdLogo from '@/components/tables/cells/TableTdLogo.vue';
import TableTdName from '@/components/tables/cells/TableTdName.vue';

export interface IUseTableClubs {
  clubs: Ref<IClub[]>;
  clubsTable: ComputedRef<ITable>;
  getClubs: () => Promise<void>;
  searchInTable: (query: string) => Promise<void>;
}

export const useTableClubs = (): IUseTableClubs => {
  const clubs = ref<IClub[]>([]);

  // Components
  const onSortHandler = (p: SortOrder) => {
    console.log(p);
    clubs.value = clubs.value.sort((a, b) => {
      if (p === 'asc') return a.points < b.points ? -1 : 1;

      return a.points > b.points ? -1 : 1;
    });
    // TODO: Тут отправляем запрос на сервер для получения отсортированного списка и потом кладем его в таблицу
  };
  const useTableThSortPoints = useDynamicComponent({
    component: TableThSort,
    componentProps: () => ({ title: 'Очки', onSortHandler }),
  });

  //
  const textColorFill = new TextColorFill();

  // Generate table
  const genTable = new GenerateTable();

  // Header
  const headRowCells = [
    genTable.createCell(TableClubKeys.Id, 'ID'),
    genTable.createCell(TableClubKeys.Logo, 'Логотип'),
    genTable.createCell(TableClubKeys.Name, 'Название'),
    genTable.createCell(TableClubKeys.City, 'Город'),
    genTable.createCell(TableClubKeys.Points, markRaw(useTableThSortPoints)),
  ];
  const headRow = genTable.createRow(headRowCells);
  const header = genTable.createHeader(headRow);

  // Body
  const mapClub = (rawData: IClub): ITableRow => {
    const numbers = clubs.value.map((club) => club.points);
    const maxNumber = Math.max(...numbers);

    return {
      ...rawData,
      ...(maxNumber === rawData.points && { cssClass: 'active' }),
      cells: Object.keys(rawData).map((k) => {
        if (k === 'logoUrl') {
          return genTable.createCell(
            k,
            markRaw(
              useDynamicComponent({
                component: TableTdLogo,
                componentProps: () => ({ src: rawData[k] }),
              })
            )
          );
        }

        if (k === 'name') {
          return genTable.createCell(
            k,
            markRaw(
              useDynamicComponent({
                component: TableTdName,
                componentProps: () => ({ name: rawData[k] }),
              })
            )
          );
        }

        return genTable.createCell(k, rawData[k]);
      }),
    };
  };
  const bodyRows = computed(() => clubs.value.map(mapClub));
  const body = computed(() => genTable.createBody(bodyRows.value));

  // New
  const clubsTable = computed(() => genTable.createTable(header, body.value));

  // Methods
  // TODO: Запросы будут выполняться через еще один слой абстракции. Сервисный слой с CRUD (src/services/index)
  const getClubs = async () => {
    const _clubs = await services.clubsService.fetchClubs();
    clubs.value = _clubs.sort((a, b) => (a.points < b.points ? -1 : 1));
  };

  const searchInTable = async (query: string) => {
    clubs.value = clubs.value.map((club) => {
      return {
        ...club,
        name: textColorFill.fill(club.name, query),
      };
    });
    // TODO: Тут отправляем запрос на сервер для получения отфильтрованного списка по поисковому слову и потом кладем его в таблицу
  };

  return {
    clubsTable,
    clubs,
    getClubs,
    searchInTable,
  };
};
