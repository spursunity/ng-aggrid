import { Injectable } from '@angular/core';
import { IToolPanelParams } from 'ag-grid-community';
import { fromEventPattern, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable()
export class ToolpanelRendererService {
  constructor() {}

  getAllRowsCount(params: IToolPanelParams): Observable<number> {
    return fromEventPattern(
      (handler) => params.api.addEventListener('paginationChanged', handler),
      (handler) => params.api.removeEventListener('paginationChanged', handler)
    ).pipe(
      startWith(0),
      map(() => {
        const allRows = params.api.getDisplayedRowCount() || 0;

        return allRows;
      })
    );
  }

  getSelectedRowsCount(params: IToolPanelParams): Observable<number> {
    return fromEventPattern(
      (handler) => params.api.addEventListener('selectionChanged', handler),
      (handler) => params.api.removeEventListener('selectionChanged', handler)
    ).pipe(
      startWith(0),
      map(() => {
        const selectedRows = params.api.getSelectedRows()?.length || 0;

        return selectedRows;
      })
    );
  }
}
