import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { ThumbnailRendererComponent } from './thumbnail-renderer/thumbnail-renderer.component';

@NgModule({
  declarations: [TableComponent, ThumbnailRendererComponent],
  imports: [CommonModule, TableRoutingModule, AgGridModule.withComponents([])],
})
export class TableModule {}
