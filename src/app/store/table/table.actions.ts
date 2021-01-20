import { createAction, props } from '@ngrx/store';

import { ITableRowData } from '@shared/interface/table.interface';

export const addTableData = createAction(
  '[Table Component] Add Table Data',
  props<{ payload: { content: ITableRowData[] } }>()
);

export const setIsLinkProp = createAction(
  '[Table Component] Set Is Link Prop To Row',
  props<{ payload: { videoId: string; isLinkFlag: boolean } }>()
);

export const changeSelectionStatus = createAction(
  '[Table Component] Change Selection Status',
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
