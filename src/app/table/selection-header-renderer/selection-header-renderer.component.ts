import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { fromEventPattern, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent';

import { BaseCellRendererComponent } from '@shared/abstract/abstract-renderer.component';

@Component({
  selector: 'app-selection-header-renderer',
  templateUrl: './selection-header-renderer.component.html',
  styleUrls: ['./selection-header-renderer.component.scss'],
})
export class SelectionHeaderRendererComponent extends BaseCellRendererComponent {
  checked = false;

  private selectionHandler$!: Observable<void>;

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.compareRowsCount();
    this.addSelectionListener();
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

  private addSelectionListener() {
    const eventName = 'selectionChanged';
    const addSelectionHandler = (handler: NodeEventHandler) => {
      this.params.api.addEventListener(eventName, handler);
    };

    const removeSelectionHandler = (handler: NodeEventHandler) => {
      this.params.api.removeEventListener(eventName, handler);
    };

    this.selectionHandler$ = fromEventPattern(
      addSelectionHandler,
      removeSelectionHandler
    );

    this.selectionHandler$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.compareRowsCount());
  }
}
