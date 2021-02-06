import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-selection-header-renderer',
  templateUrl: './selection-header-renderer.component.html',
  styleUrls: ['./selection-header-renderer.component.scss'],
})
export class SelectionHeaderRendererComponent
  implements ICellRendererAngularComp {
  params!: ICellRendererParams;
  checked = false;

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.compareRowsCount();
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
    this.compareRowsCount();
  }

  private compareRowsCount(): void {
    if (this.params) {
      this.checked =
        this.params.api.getDisplayedRowCount() ===
        this.params.api.getSelectedRows()?.length;
    }
  }
}
