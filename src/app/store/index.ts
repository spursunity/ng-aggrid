import { REDUCER_TABLE_KEY } from '@shared/const/table.const';
import { tableReducer } from './table';

export const appState = {
  [REDUCER_TABLE_KEY]: tableReducer,
};
