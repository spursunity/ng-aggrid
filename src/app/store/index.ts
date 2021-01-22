import { EReducerKeys } from '@shared/enum/app.enum';
import { tableReducer } from './table';

export const appState = {
  [EReducerKeys.table]: tableReducer,
};
