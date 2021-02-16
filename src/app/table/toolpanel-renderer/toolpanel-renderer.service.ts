import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
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
  readonly allRowsCount$ = this.store.select(selectAllRowsCount);
  readonly selectedRowsCount$ = this.store.select(selectSelectedRowsCount);
  readonly hasSelection$ = this.store.select(selectSelectionState).pipe(
    tap((hasSelection) => {
      this.withSelection = hasSelection;
    })
  );

  constructor(private store: Store<IAppState>) {}

  switchSelection(params: IToolPanelParams): void {
    const payload = {
      hasSelection: !this.withSelection,
    };

    if (!payload.hasSelection) {
      this.changeSelectionColumnVisibility(params, payload.hasSelection);
      params.api.deselectAll();
    }

    this.store.dispatch(changeSelectionStatus({ payload }));
  }

  private changeSelectionColumnVisibility(
    params: IToolPanelParams,
    hasSelection: boolean
  ): void {
    const newColumnsState = {
      state: [
        {
          colId: TABLE_SELECTION_COLUMN_ID,
          hide: !hasSelection,
        },
      ],
    };
    params.columnApi.applyColumnState(newColumnsState);
  }
}
