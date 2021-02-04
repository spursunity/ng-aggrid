import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

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
    this.videoTitle = params.data?.title || '';
    this.videoLink = params.data?.videoLink;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
