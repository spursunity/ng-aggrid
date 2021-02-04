import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-description-renderer',
  templateUrl: './description-renderer.component.html',
  styleUrls: ['./description-renderer.component.scss'],
})
export class DescriptionRendererComponent implements ICellRendererAngularComp {
  description = '' as string;

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.description = params?.value || '';
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
