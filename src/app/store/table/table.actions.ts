import { createAction, props } from '@ngrx/store';

import { ITableRowData } from '@shared/interface/table.interface';

export const addTableData = createAction(
  '[Table Component] Add Table Data',
  props<{ payload: { content: ITableRowData[] } }>()
);
