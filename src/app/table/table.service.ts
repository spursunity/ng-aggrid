import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { TABLE_GRID_CONFIG, TABLE_THUMBNAIL_RENDERER, TABLE_TITLE, YOUTUBE_DATA_URL } from '@shared/const/table.const';
import { IAppState } from '@shared/interface/app.interface';
import { ITableRowData } from '@shared/interface/table.interface';
import { addTableData, selectTableData } from '@store/table';
import { HttpHelperService } from '@shared/helper/http-helper.service';
import { ThumbnailRendererComponent } from './thumbnail-renderer/thumbnail-renderer.component';

@Injectable()
export class TableService {
  tableTitle: string = TABLE_TITLE;
  tableConfig: any[] = TABLE_GRID_CONFIG;
  tableData: Observable<ITableRowData[]>;
  tableDataUrl: string = YOUTUBE_DATA_URL;
  tableFrameworkComponents: any = {
    [TABLE_THUMBNAIL_RENDERER]: ThumbnailRendererComponent,
  };

  constructor(private store: Store<IAppState>, private httpHelper: HttpHelperService) {
    this.tableData = this.store.select(selectTableData);
  }

  setTableData(): void {
    this.httpHelper
      .httpGetRequest(this.tableDataUrl)
      .pipe(
        map((response: any) => ({
          content: (response?.items || []).map(({ snippet }: any) => ({
            thumbnail: snippet.thumbnails.default,
            publishedAt: snippet.publishedAt,
            title: snippet.title,
            description: snippet.description,
          })),
        })),
        catchError(() => [])
      )
      .subscribe(
        (data) => {
          this.store.dispatch(addTableData({ payload: data }));
        },
        (err) => console.error('getTableData Error: ', err.message)
      );
  }

  getTableData(): Observable<ITableRowData[]> {
    return this.tableData;
  }
}
