import { Injectable } from '@angular/core';
import { COLUMN_DEFS, ROW_DATA } from '@shared/mock/table-data';

@Injectable()
export class TableService {
  constructor() {}

  getTableConfig(): any[] {
    return COLUMN_DEFS;
  }

  getTableData(): any[] {
    return ROW_DATA;
  }
}
