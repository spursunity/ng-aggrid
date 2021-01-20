import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-selection-cell',
  templateUrl: './selection-cell.component.html',
  styleUrls: ['./selection-cell.component.scss'],
})
export class SelectionCellComponent implements ICellRendererAngularComp {
  checked = false;
  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.checked = params.node?.isSelected() || false;
  }

  refresh(params: ICellRendererParams): boolean {
    this.checked = params.node?.isSelected() || false;
    return true;
  }
}
