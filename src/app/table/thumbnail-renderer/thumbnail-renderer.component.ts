import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { AbstractRendererComponent } from '@shared/abstract/abstract-renderer.component';

@Component({
  selector: 'app-thumbnail-renderer',
  templateUrl: './thumbnail-renderer.component.html',
  styleUrls: ['./thumbnail-renderer.component.scss'],
})
export class ThumbnailRendererComponent extends AbstractRendererComponent {
  imageData = {
    url: '',
    width: 0,
    height: 0,
  };

  agInit(params: ICellRendererParams) {
    super.agInit(params);
    this.imageData = { ...params.value };
  }
}
