import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  YOUTUBE_DATA_URL,
  YOUTUBE_VIDEO_LINK,
} from '@shared/const/table.const';
import {
  IResponseTableData,
  IResponseTableDataItem,
  ITableRowData,
} from '@shared/interface/table.interface';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class VideosService extends BaseHttpService {
  getYoutubeAPIData(): Observable<{ content: ITableRowData[] }> {
    return this.httpGetRequest<IResponseTableData>(YOUTUBE_DATA_URL).pipe(
      map((response: IResponseTableData): { content: ITableRowData[] } => ({
        content: (response?.items || []).map(
          ({ snippet, id }: IResponseTableDataItem) => ({
            thumbnail: snippet.thumbnails?.default,
            publishedAt: snippet.publishedAt,
            title: snippet.title,
            description: snippet.description,
            videoLink: this.getVideoLink(id.videoId),
          })
        ),
      }))
    );
  }

  private getVideoLink(videoId: string = ''): string {
    return YOUTUBE_VIDEO_LINK.template.replace(
      YOUTUBE_VIDEO_LINK.replacement,
      videoId
    );
  }
}
