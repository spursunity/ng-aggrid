import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IToolPanelParams } from 'ag-grid-community';

import { IAppState } from '@shared/interface/app.interface';
import {
  changeSelectionStatus,
  selectAllRowsCount,
  selectSelectedRowsCount,
  selectSelectionState,
} from '@store/table';
import { TABLE_SELECTION_COLUMN_ID } from '@shared/const/table.const';

@Injectable()
export class ToolpanelRendererService {
  withSelection = false;

  private params!: IToolPanelParams;

  constructor(private store: Store<IAppState>) {}

  getAllRowsCount(): Observable<number> {
    return this.store.select(selectAllRowsCount);
  }

  getSelectedRowsCount(): Observable<number> {
    return this.store.select(selectSelectedRowsCount);
  }

  getHasSelection(): Observable<boolean> {
    return this.store.select(selectSelectionState).pipe(
      tap((hasSelection) => {
        this.withSelection = hasSelection;
        this.changeSelectionColumnVisibility(hasSelection);
      })
    );
  }

  switchSelection(params: IToolPanelParams): void {
    this.params = params;
    const payload = {
      hasSelection: !this.withSelection,
    };

    if (!payload.hasSelection) {
      this.changeSelectionColumnVisibility(payload.hasSelection);
      this.params.api.deselectAll();
    }

    this.store.dispatch(changeSelectionStatus({ payload }));
  }

  private changeSelectionColumnVisibility(hasSelection: boolean): void {
    if (this.params) {
      const newColumnsState = {
        state: [
          {
            colId: TABLE_SELECTION_COLUMN_ID,
            hide: !hasSelection,
          },
        ],
      };
      this.params.columnApi.applyColumnState(newColumnsState);
    }
  }
}
