import { createAction, props } from '@ngrx/store';

import { ITableRowData } from '@shared/interface/table.interface';

export const ADD_TABLE_DATA_ACTION = '[Table Component] Add Table Data';
export const CHANGE_SELECTION_STATUS =
  '[Table Component] Change Selection Status';
export const addTableData = createAction(
  ADD_TABLE_DATA_ACTION,
  props<{ payload: { content: ITableRowData[] } }>()
);

export const changeSelectionStatus = createAction(
  CHANGE_SELECTION_STATUS,
  props<{ payload: { hasSelection: boolean } }>()
);

export const setAllRowsCount = createAction(
  '[Table Component] Set All Rows Count',
  props<{ payload: { allRowsCount: number } }>()
);

export const setSelectedRowsCount = createAction(
  '[Table Component] Set Selected Rows Count',
  props<{ payload: { selectedRowsCount: number } }>()
);
