import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { ThumbnailRendererComponent } from './thumbnail-renderer/thumbnail-renderer.component';
import { TableDataTransformPipe } from '@shared/pipe/table-data-transform.pipe';

@NgModule({
  declarations: [TableComponent, ThumbnailRendererComponent, TableDataTransformPipe],
  imports: [CommonModule, TableRoutingModule, AgGridModule.withComponents([])],
})
export class TableModule {}
