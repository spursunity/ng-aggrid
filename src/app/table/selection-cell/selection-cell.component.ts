import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-selection-cell',
  templateUrl: './selection-cell.component.html',
  styleUrls: ['./selection-cell.component.scss'],
})
export class SelectionCellComponent implements ICellRendererAngularComp {
  private params!: ICellRendererParams;

  get checked() {
    const isSelected = this.params?.node?.isSelected();

    return Boolean(isSelected);
  }

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  selectRow() {
    this.params?.node?.setSelected(!this.checked);
  }
}
