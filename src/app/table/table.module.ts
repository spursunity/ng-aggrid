import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, AgGridModule.withComponents([])],
})
export class TableModule {}
