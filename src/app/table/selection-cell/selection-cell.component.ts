import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { AbstractRendererComponent } from '@shared/abstract/abstract-renderer.component';

@Component({
  selector: 'app-selection-cell',
  templateUrl: './selection-cell.component.html',
  styleUrls: ['./selection-cell.component.scss'],
})
export class SelectionCellComponent extends AbstractRendererComponent {
  get checked() {
    const isSelected = this.params?.node?.isSelected();

    return Boolean(isSelected);
  }

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
  }

  selectRow() {
    this.params?.node?.setSelected(!this.checked);
  }
}
