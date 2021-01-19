import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-selection-header-renderer',
  templateUrl: './selection-header-renderer.component.html',
  styleUrls: ['./selection-header-renderer.component.scss'],
})
export class SelectionHeaderRendererComponent implements ICellRendererAngularComp {
  checked = false;
  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.checked = false;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
