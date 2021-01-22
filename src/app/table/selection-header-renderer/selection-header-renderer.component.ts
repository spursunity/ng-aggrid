import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IAppState } from '@shared/interface/app.interface';
import { selectIsAllRowsSelected } from '@store/table';

@Component({
  selector: 'app-selection-header-renderer',
  templateUrl: './selection-header-renderer.component.html',
  styleUrls: ['./selection-header-renderer.component.scss'],
})
export class SelectionHeaderRendererComponent implements ICellRendererAngularComp {
  checkboxState$: Observable<boolean>;
  params!: ICellRendererParams;

  private checked = false;

  constructor(private store: Store<IAppState>) {
    this.checkboxState$ = this.store
      .select(selectIsAllRowsSelected)
      .pipe(map((isAllSelected: boolean) => (this.checked = isAllSelected)));
  }

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
  }
}
