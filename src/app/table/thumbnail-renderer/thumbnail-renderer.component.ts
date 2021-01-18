import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-thumbnail-renderer',
  templateUrl: './thumbnail-renderer.component.html',
  styleUrls: ['./thumbnail-renderer.component.scss'],
})
export class ThumbnailRendererComponent implements ICellRendererAngularComp {
  public imageData = {
    url: '',
    width: 0,
    height: 0,
  };

  constructor() {}

  agInit(params: any) {
    this.imageData = { ...params.value };
  }

  refresh(): boolean {
    return false;
  }
}
