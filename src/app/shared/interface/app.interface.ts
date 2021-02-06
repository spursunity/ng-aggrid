import { Action } from '@ngrx/store';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererComp } from 'ag-grid-community';
import { ITableState } from './table.interface';

export interface IAppState {
  table: ITableState;
}

export type TCustomAction = Action & { payload: any };
export type TCustomCellRendererComp<C> = ICellRendererComp & {
  getFrameworkComponentInstance: () => C;
};
