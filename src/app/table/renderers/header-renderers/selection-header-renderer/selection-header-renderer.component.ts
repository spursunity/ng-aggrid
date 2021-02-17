import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { takeUntil } from 'rxjs/operators';
import { EventTargetLike, fromEvent } from 'rxjs/internal/observable/fromEvent';

import { BaseCellRendererComponent } from '../../base-cell-renderer.component';

@Component({
  selector: 'app-selection-header-renderer',
  templateUrl: './selection-header-renderer.component.html',
  styleUrls: ['./selection-header-renderer.component.scss'],
})
export class SelectionHeaderRendererComponent extends BaseCellRendererComponent {
  checked = false;

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.updateCheckedState();
    fromEvent(this.params.api as EventTargetLike<void>, 'selectionChanged')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.updateCheckedState());
  }

  changeRowsSelectionState(): void {
    if (this.checked) {
      this.params.api?.deselectAll();
    } else {
      this.params.api?.selectAll();
    }
    this.updateCheckedState();
  }

  private updateCheckedState(): void {
    if (this.params) {
      this.checked =
        this.params.api.getDisplayedRowCount() ===
        this.params.api.getSelectedRows()?.length;
    }
  }
}
