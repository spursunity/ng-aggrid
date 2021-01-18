import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EReducerKeys } from '@shared/enum/app.enum';
import { IAppState } from '@shared/interface/app.interface';
import { ITableState } from '@shared/interface/table.interface';

const selectTableDataFeature = createFeatureSelector<IAppState, ITableState>(EReducerKeys.table);

export const selectTableData = createSelector(selectTableDataFeature, (state: ITableState) => state.content);
