import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { BaseCellRendererComponent } from '@shared/abstract/abstract-renderer.component';

@Component({
  selector: 'app-published-renderer',
  templateUrl: './published-renderer.component.html',
  styleUrls: ['./published-renderer.component.scss'],
})
export class PublishedRendererComponent extends BaseCellRendererComponent {
  publishedDate!: string;

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.publishedDate = params?.value || '';
  }
}
