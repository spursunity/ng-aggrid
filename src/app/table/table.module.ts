import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { MaterialModule } from '../material/material.module';
import { ToolpanelRendererComponent } from './renderers/toolpanel-renderer/toolpanel-renderer.component';
import { VideosService } from '@shared/service/videos.service';
import {
  DescriptionRendererComponent,
  PublishedRendererComponent,
  SelectionCellComponent,
  SelectionHeaderRendererComponent,
  ThumbnailRendererComponent,
  VideoTitleRendererComponent,
} from './renderers';

@NgModule({
  declarations: [
    TableComponent,
    ThumbnailRendererComponent,
    SelectionCellComponent,
    SelectionHeaderRendererComponent,
    ToolpanelRendererComponent,
    VideoTitleRendererComponent,
    PublishedRendererComponent,
    DescriptionRendererComponent,
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    AgGridModule.withComponents([]),
    MaterialModule,
  ],
  providers: [VideosService],
})
export class TableModule {}
