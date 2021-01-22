import { Action, createReducer, on } from '@ngrx/store';

import { ITableState } from '@shared/interface/table.interface';
import {
  addTableData,
  changeSelectionStatus,
  setAllRowsCount,
  setIsLinkProp,
  setSelectedRowsCount,
} from './table.actions';

const initialState: ITableState = {
  content: [],
  hasSelection: false,
  allRowsCount: 0,
  selectedRowsCount: 0,
};

const tableActionReducer = createReducer(
  initialState,
  on(addTableData, (state, { payload }) => ({
    ...state,
    content: [...payload.content],
  })),
  on(setIsLinkProp, (state, { payload }) => {
    const { content } = state;
    const newContent = content.map((row) => {
      if (row.videoId === payload.videoId) {
        return {
          ...row,
          thumbnail: {
            ...row.thumbnail,
            isLink: payload.isLinkFlag,
          },
        };
      }
      return { ...row };
    });
    return {
      ...state,
      content: [...newContent],
    };
  }),
  on(changeSelectionStatus, (state, { payload }) => ({
    ...state,
    hasSelection: payload.hasSelection,
  })),
  on(setAllRowsCount, (state, { payload }) => ({
    ...state,
    allRowsCount: payload.allRowsCount,
  })),
  on(setSelectedRowsCount, (state, { payload }) => ({
    ...state,
    selectedRowsCount: payload.selectedRowsCount,
  }))
);

export const tableReducer = (state: ITableState | undefined, action: Action): ITableState =>
  tableActionReducer(state, action);
