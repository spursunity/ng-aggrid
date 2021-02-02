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
import { ToolpanelRendererComponent } from './toolpanel-renderer/toolpanel-renderer.component';
import { TableConfigHelper } from '@shared/helper/table-config-helper.service';
import { VideoTitleRendererComponent } from './video-title-renderer/video-title-renderer.component';
import { PublishedRendererComponent } from './published-renderer/published-renderer.component';

@NgModule({
  declarations: [
    TableComponent,
    ThumbnailRendererComponent,
    TableDataTransformPipe,
    SelectionCellComponent,
    SelectionHeaderRendererComponent,
    ToolpanelRendererComponent,
    VideoTitleRendererComponent,
    PublishedRendererComponent,
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    AgGridModule.withComponents([]),
    MaterialModule,
  ],
  providers: [TableConfigHelper],
})
export class TableModule {}
