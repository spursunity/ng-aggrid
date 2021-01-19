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
