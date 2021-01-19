import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

import { YOUTUBE_VIDEO_LINK } from '@shared/const/table.const';

@Component({
  selector: 'app-thumbnail-renderer',
  templateUrl: './thumbnail-renderer.component.html',
  styleUrls: ['./thumbnail-renderer.component.scss'],
})
export class ThumbnailRendererComponent implements ICellRendererAngularComp {
  imageData = {
    url: '',
    width: 0,
    height: 0,
    isLink: false,
  };
  videoLink = '';

  constructor() {}

  agInit(params: any) {
    const videoId = params.data?.videoId;

    this.imageData = { ...params.value };
    this.videoLink = videoId ? YOUTUBE_VIDEO_LINK.template.replace(YOUTUBE_VIDEO_LINK.replacement, videoId) : '';
  }

  refresh(): boolean {
    return false;
  }
}
