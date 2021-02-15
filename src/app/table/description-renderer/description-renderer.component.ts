import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { AbstractRendererComponent } from '@shared/abstract/abstract-renderer.component';

@Component({
  selector: 'app-description-renderer',
  templateUrl: './description-renderer.component.html',
  styleUrls: ['./description-renderer.component.scss'],
})
export class DescriptionRendererComponent extends AbstractRendererComponent {
  description = '' as string;

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.description = params?.value || '';
  }
}