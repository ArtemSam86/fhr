import { GenerateTable, type ITableRow } from '@/shared/lib/table';
import type { ITable } from '@/shared/lib/table';
import { reactive, markRaw, type Reactive, ref, type Ref } from 'vue';
import { useDynamicComponent } from '@/shared/utils/useDynamicComponent';
import type { SortOrder } from '@/shared/types/common.ts';

import TableThSort from '@/components/tables/cells/TableThSort.vue';
import TableLogo from '@/components/tables/cells/TableTdLogo.vue';

enum TableClubKeys {
  Id = 'id',
  Logo = 'logo',
  Name = 'name',
  City = 'city',
  Points = 'points',
}
interface IClub extends Record<string, any> {
  id: string;
  logoUrl: string;
  name: string;
  city: string;
  points: number;
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

export interface IUseTableClubs {
  clubs: Ref<IClub[]>;
  clubsTable: Reactive<ITable>;
  getClubs: () => Promise<void>;
  searchInTable: (query: string) => Promise<void>;
}

export const useTableClubs = (): IUseTableClubs => {
  // Components
  const onSortHandler = (p: SortOrder) => {
    console.log(p);
    // TODO: Тут отправляем запрос на сервер для получения отсортированного списка и потом кладем его в таблицу
  };
  const useTableThSortPoints = useDynamicComponent({
    component: TableThSort,
    componentProps: () => ({ title: 'Очки', onSortHandler }),
  });

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
    return {
      ...rawData,
      cells: Object.keys(rawData).map((k) => {
        if (k === 'logoUrl') {
          return genTable.createCell(
            k,
            markRaw(
              useDynamicComponent({
                component: TableLogo,
                componentProps: () => ({ src: rawData[k] }),
              })
            )
          );
        }

        return genTable.createCell(k, rawData[k]);
      }),
    };
  };
  const bodyRows = dataClubs.map(mapClub);
  const body = genTable.createBody(bodyRows);

  // New
  const clubs = ref<IClub[]>([]);
  const newTable = genTable.createTable(header, body);
  const clubsTable = reactive(newTable);

  // Methods
  // TODO: Запросы будут выполняться через еще один слой абстракции. Сервисный слой с CRUD (src/services/index)
  const getClubs = async () => {
    clubs.value = dataClubs;
  };
  const searchInTable = async (query: string) => {
    console.log(query);
    // TODO: Тут отправляем запрос на сервер для получения отфильтрованного списка по поисковому слову и потом кладем его в таблицу
  };

  return {
    clubsTable,
    clubs,
    getClubs,
    searchInTable,
  };
};
