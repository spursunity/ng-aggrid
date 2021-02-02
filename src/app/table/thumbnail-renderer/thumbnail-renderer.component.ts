import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

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
  };

  constructor() {}

  agInit(params: ICellRendererParams) {
    this.imageData = { ...params.value };
  }

  refresh(): boolean {
    return false;
  }
}
