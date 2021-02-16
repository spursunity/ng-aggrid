import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { BaseCellRendererComponent } from '@shared/abstract/abstract-renderer.component';

@Component({
  selector: 'app-video-title-renderer',
  templateUrl: './video-title-renderer.component.html',
  styleUrls: ['./video-title-renderer.component.scss'],
})
export class VideoTitleRendererComponent extends BaseCellRendererComponent {
  videoLink = '';
  videoTitle = '';

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.videoTitle = params.data?.title || '';
    this.videoLink = params.data?.videoLink;
  }
}
