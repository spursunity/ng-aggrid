import { Action, createReducer, on } from '@ngrx/store';

import { ITableState } from '@shared/interface/table.interface';
import { addTableData } from './table.actions';

const initialState: ITableState = {
  content: [],
};

const tableActionReducer = createReducer(
  initialState,
  on(addTableData, (state, { payload }) => ({
    ...state,
    content: [...payload.content],
  }))
);

export const tableReducer = (state: ITableState | undefined, action: Action): ITableState =>
  tableActionReducer(state, action);
