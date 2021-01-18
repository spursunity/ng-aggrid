import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TABLE_GRID_CONFIG, TABLE_TITLE } from '@shared/const/table.const';
import { IAppState } from '@shared/interface/app.interface';
import { ITableRowData } from '@shared/interface/table.interface';
import { addTableData, selectTableData } from '@store/table';

@Injectable()
export class TableService {
  tableTitle: string = TABLE_TITLE;
  tableConfig: any[] = TABLE_GRID_CONFIG;
  tableData: Observable<ITableRowData[]>;

  constructor(private store: Store<IAppState>) {
    this.tableData = this.store.select(selectTableData);
  }

  setTableData(): void {
    const newTableData = {
      payload: { content: [] },
    };
    this.store.dispatch(addTableData(newTableData));
  }

  getTableData(): Observable<ITableRowData[]> {
    return this.tableData;
  }
}
