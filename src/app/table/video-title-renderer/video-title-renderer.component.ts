import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { YOUTUBE_VIDEO_LINK } from '@shared/const/table.const';

@Component({
  selector: 'app-video-title-renderer',
  templateUrl: './video-title-renderer.component.html',
  styleUrls: ['./video-title-renderer.component.scss'],
})
export class VideoTitleRendererComponent implements ICellRendererAngularComp {
  videoLink = '';
  videoTitle = '';

  constructor() {}

  agInit(params: ICellRendererParams): void {
    const videoId = params.data?.videoId;

    this.videoTitle = params.data?.title || '';
    this.videoLink = videoId ? YOUTUBE_VIDEO_LINK.template.replace(YOUTUBE_VIDEO_LINK.replacement, videoId) : '';
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
