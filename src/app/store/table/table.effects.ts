import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ADD_TABLE_DATA_ACTION } from './table.actions';
import { TABLE_EFFECT_ACTIONS } from '@shared/const/table.const';
import { TableHelperService } from '@shared/helper/table-helper.service';

@Injectable()
class TableEffects {
  loadTableData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TABLE_EFFECT_ACTIONS.loadTableData),
      mergeMap(() =>
        this.tableHelper.getYoutubeAPIData().pipe(
          map((payload) => ({ type: ADD_TABLE_DATA_ACTION, payload })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private tableHelper: TableHelperService
  ) {}
}

export const tableEffects = [TableEffects];
