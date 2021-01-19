import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { ThumbnailRendererComponent } from './thumbnail-renderer/thumbnail-renderer.component';
import { TableDataTransformPipe } from '@shared/pipe/table-data-transform.pipe';
import { SelectionCellComponent } from './selection-cell/selection-cell.component';
import { SelectionHeaderRendererComponent } from './selection-header-renderer/selection-header-renderer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    TableComponent,
    ThumbnailRendererComponent,
    TableDataTransformPipe,
    SelectionCellComponent,
    SelectionHeaderRendererComponent,
  ],
  imports: [CommonModule, TableRoutingModule, AgGridModule.withComponents([]), MaterialModule],
})
export class TableModule {}
