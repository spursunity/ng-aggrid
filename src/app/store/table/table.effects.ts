import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { HttpHelperService } from '@shared/helper/http-helper.service';
import { ADD_TABLE_DATA_ACTION } from './table.actions';
import { ITableRowData } from '@shared/interface/table.interface';
import { TABLE_EFFECT_ACTIONS, YOUTUBE_DATA_URL } from '@shared/const/table.const';

@Injectable()
class TableEffects {
  loadTableData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TABLE_EFFECT_ACTIONS.loadTableData),
      mergeMap(() =>
        this.httpHelper.httpGetRequest(YOUTUBE_DATA_URL).pipe(
          map((response: any): { content: ITableRowData[] } => ({
            content: (response?.items || []).map(({ snippet, id }: any) => ({
              thumbnail: snippet.thumbnails?.default,
              publishedAt: snippet.publishedAt,
              title: snippet.title,
              description: snippet.description,
              videoId: id.videoId,
            })),
          })),
          map((payload) => ({ type: ADD_TABLE_DATA_ACTION, payload })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private httpHelper: HttpHelperService) {}
}

export const tableEffects = [TableEffects];
