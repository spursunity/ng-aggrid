import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { BaseCellRendererComponent } from '../../base-cell-renderer.component';

@Component({
  selector: 'app-selection-renderer',
  templateUrl: './selection-renderer.component.html',
  styleUrls: ['./selection-renderer.component.scss'],
})
export class SelectionCellComponent extends BaseCellRendererComponent {
  get checked() {
    return !!this.params?.node?.isSelected();
  }

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
  }

  selectRow() {
    this.params?.node?.setSelected(!this.checked);
  }
}
