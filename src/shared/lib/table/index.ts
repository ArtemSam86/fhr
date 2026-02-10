import type { DefineSetupFnComponent, PublicProps } from 'vue';

export type TdThComponent = DefineSetupFnComponent<
  Record<string, any>,
  {},
  {},
  Record<string, any> & {},
  PublicProps
>;

interface ITableCell<T = string> {
  key: T;
  cssClass?: string;
  component?: TdThComponent | HTMLElement | string | number | null;
}
class TableCell<T> implements ITableCell<T> {
  component;
  key;
  cssClass;
  constructor(
    key: T,
    component: TdThComponent | HTMLElement | string | number | null,
    cssClass?: string
  ) {
    this.key = key;
    this.component = component;
    this.cssClass = cssClass;
  }
}

export interface ITableRow {
  cssClass?: string;
  cells: ITableCell[];
}
class TableRow implements ITableRow {
  cells;
  cssClass;
  constructor(cells: ITableCell[], cssClass?: string) {
    this.cells = cells;
    this.cssClass = cssClass;
  }
}

interface ITableHeader {
  cssClass?: string;
  row: ITableRow;
}
class TableHeader implements ITableHeader {
  row;
  cssClass;
  constructor(row: ITableRow, cssClass?: string) {
    this.row = row;
    this.cssClass = cssClass;
  }
}

interface ITableBody {
  cssClass?: string;
  rows: ITableRow[];
}
class TableBody implements ITableBody {
  rows;
  cssClass;
  constructor(rows: ITableRow[], cssClass?: string) {
    this.rows = rows;
    this.cssClass = cssClass;
  }
}

export interface ITable {
  cssClass?: string;
  header: ITableHeader;
  body: ITableBody;
}
class Table implements ITable {
  body;
  header;
  cssClass;
  constructor(header: ITableHeader, body: ITableBody, cssClass?: string) {
    this.header = header;
    this.body = body;
    this.cssClass = cssClass;
  }
}

export interface IGenerateTable {
  createCell<T>(
    key: T,
    component: TdThComponent | HTMLElement | string | number | null
  ): ITableCell<T>;
  createRow(cells: ITableCell[]): ITableRow;
  createHeader(row: ITableRow): ITableHeader;
  createBody(rows: ITableRow[]): ITableBody;
  createTable(header: ITableHeader, body: ITableBody): ITable;
}
export class GenerateTable implements IGenerateTable {
  createCell<T>(
    key: T,
    component: TdThComponent | HTMLElement | string | number | null,
    cssClass?: string
  ): ITableCell<T> {
    return new TableCell<T>(key, component, cssClass);
  }

  createRow(cells: ITableCell[], cssClass?: string): ITableRow {
    return new TableRow(cells, cssClass);
  }

  createHeader(row: ITableRow, cssClass?: string): ITableHeader {
    return new TableHeader(row, cssClass);
  }

  createBody(rows: ITableRow[], cssClass?: string): ITableBody {
    return new TableBody(rows, cssClass);
  }

  createTable(
    header: ITableHeader,
    body: ITableBody,
    cssClass?: string
  ): ITable {
    return new Table(header, body, cssClass);
  }
}

// TODO: Тут можно расширять функционал таблицы, добавлением новых методов
