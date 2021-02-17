import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { BaseCellRendererComponent } from '../../base-cell-renderer.component';

@Component({
  selector: 'app-description-renderer',
  templateUrl: './description-renderer.component.html',
  styleUrls: ['./description-renderer.component.scss'],
})
export class DescriptionRendererComponent extends BaseCellRendererComponent {
  description = '';

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.description = params?.value || '';
  }
}
