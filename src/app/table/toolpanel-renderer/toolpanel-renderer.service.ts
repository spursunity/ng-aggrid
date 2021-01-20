import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IToolPanelParams } from 'ag-grid-community';
import { fromEventPattern, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { IAppState } from '@shared/interface/app.interface';
import { selectAllRowsCount, selectSelectedRowsCount, selectSelectionState } from '@store/table';

@Injectable()
export class ToolpanelRendererService {
  hasSelection$: Observable<boolean>;
  allRowsCount$: Observable<number>;
  selectedRowsCount$: Observable<number>;
  withSelection = false;

  constructor(private store: Store<IAppState>) {
    this.hasSelection$ = this.store.select(selectSelectionState).pipe(
      map((hasSelection: boolean) => {
        this.withSelection = hasSelection;
        return this.withSelection;
      })
    );
    this.allRowsCount$ = this.store.select(selectAllRowsCount);
    this.selectedRowsCount$ = this.store.select(selectSelectedRowsCount);
  }
}
