import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { AbstractRendererComponent } from '@shared/abstract/abstract-renderer.component';

@Component({
  selector: 'app-selection-header-renderer',
  templateUrl: './selection-header-renderer.component.html',
  styleUrls: ['./selection-header-renderer.component.scss'],
})
export class SelectionHeaderRendererComponent extends AbstractRendererComponent {
  checked = false;

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.compareRowsCount();
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
