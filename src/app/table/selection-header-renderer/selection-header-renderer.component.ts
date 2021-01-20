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
  params!: ICellRendererParams;

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  changeRowsSelectionState() {
    if (this.checked) {
      this.params.api?.deselectAll();
    } else {
      this.params.api?.selectAll();
    }
    this.checked = !this.checked;
  }
}
