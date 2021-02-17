import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REDUCER_TABLE_KEY } from '@shared/const/table.const';
import { IAppState } from '@shared/interface/app.interface';
import { ITableState } from '@shared/interface/table.interface';

const selectTableDataFeature = createFeatureSelector<IAppState, ITableState>(
  REDUCER_TABLE_KEY
);

export const selectTableData = createSelector(
  selectTableDataFeature,
  (state: ITableState) => state.content
);

export const selectSelectionState = createSelector(
  selectTableDataFeature,
  (state: ITableState) => state.hasSelection
);

export const selectAllRowsCount = createSelector(
  selectTableDataFeature,
  (state: ITableState) => state.allRowsCount
);

export const selectSelectedRowsCount = createSelector(
  selectTableDataFeature,
  (state: ITableState) => state.selectedRowsCount
);
