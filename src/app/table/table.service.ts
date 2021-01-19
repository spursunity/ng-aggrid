import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  CONTEXT_MENU,
  TABLE_GRID_CONFIG,
  TABLE_THUMBNAIL_RENDERER,
  TABLE_TITLE,
  YOUTUBE_DATA_URL,
} from '@shared/const/table.const';
import { IAppState } from '@shared/interface/app.interface';
import { ITableRowData } from '@shared/interface/table.interface';
import { addTableData, selectTableData, setIsLinkProp } from '@store/table';
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
        map((response: any): { content: ITableRowData[] } => ({
          content: (response?.items || []).map(({ snippet, id }: any) => ({
            thumbnail: snippet.thumbnails.default,
            publishedAt: snippet.publishedAt,
            title: snippet.title,
            description: snippet.description,
            videoId: id.videoId,
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

  getTableContextMenuItems(params: any): any[] {
    const columnId = params.column?.colId;
    const isLink = params.node?.data?.thumbnail?.isLink;
    const defaultMenu = [...CONTEXT_MENU.defaultMenu];
    const advancedMenuItem = {
      name: CONTEXT_MENU.additionalItemName,
      action: () => {
        const id = params?.node?.data?.videoId;
        const payload = {
          videoId: id,
          isLinkFlag: !isLink,
        };

        this.store.dispatch(setIsLinkProp({ payload }));
      },
      checked: isLink,
    };

    if (columnId === CONTEXT_MENU.columnIdWithAddItem) {
      return [advancedMenuItem, ...defaultMenu];
    }
    return defaultMenu;
  }
}
