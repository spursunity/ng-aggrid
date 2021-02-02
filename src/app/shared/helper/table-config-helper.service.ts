import { Injectable } from '@angular/core';
import { ColDef, GridOptions, SideBarDef } from 'ag-grid-community';

import { TABLE_SELECTION_COLUMN_ID } from '@shared/const/table.const';
import { SelectionCellComponent } from 'src/app/table/selection-cell/selection-cell.component';
import { SelectionHeaderRendererComponent } from 'src/app/table/selection-header-renderer/selection-header-renderer.component';
import { ThumbnailRendererComponent } from 'src/app/table/thumbnail-renderer/thumbnail-renderer.component';
import { ToolpanelRendererComponent } from 'src/app/table/toolpanel-renderer/toolpanel-renderer.component';
import { VideoTitleRendererComponent } from 'src/app/table/video-title-renderer/video-title-renderer.component';
import { PublishedRendererComponent } from 'src/app/table/published-renderer/published-renderer.component';
import { DescriptionRendererComponent } from 'src/app/table/description-renderer/description-renderer.component';

@Injectable()
export class TableConfigHelper {
  private columnDefs: ColDef[] = [
    {
      headerName: 'Select all',
      field: TABLE_SELECTION_COLUMN_ID,
      cellRendererFramework: SelectionCellComponent,
      headerComponentFramework: SelectionHeaderRendererComponent,
      initialHide: true,
      width: 30,
    },
    {
      headerName: '',
      field: 'thumbnail',
      cellRendererFramework: ThumbnailRendererComponent,
      width: 120,
    },
    {
      headerName: 'Published on',
      field: 'publishedAt',
      cellRendererFramework: PublishedRendererComponent,
      flex: 1,
    },
    {
      headerName: 'Video Title',
      field: 'title',
      cellRendererFramework: VideoTitleRendererComponent,
      tooltipValueGetter: (params: any) => params.value,
      flex: 3,
    },
    {
      headerName: 'Description',
      field: 'description',
      cellRendererFramework: DescriptionRendererComponent,
      tooltipValueGetter: (params: any) => params.value,
      wrapText: true,
      flex: 3,
    },
  ];
  private gridOptions: GridOptions = {
    rowHeight: 90,
    defaultColDef: {
      menuTabs: ['generalMenuTab'],
    },
  };
  private sideBar: SideBarDef = {
    toolPanels: [
      {
        id: 'selection',
        labelDefault: 'Selection',
        labelKey: 'selection',
        toolPanelFramework: ToolpanelRendererComponent,
        iconKey: 'tick',
      },
    ],
  };

  constructor() {}

  getTableColumnDefs(): ColDef[] {
    return this.columnDefs;
  }

  getTableGridOptions(): GridOptions {
    return this.gridOptions;
  }

  getTableSideBar(): SideBarDef {
    return this.sideBar;
  }
}
