import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ColDef,
  GetContextMenuItemsParams,
  GridOptions,
  MenuItemDef,
  PaginationChangedEvent,
  RowSelectedEvent,
  SideBarDef,
} from 'ag-grid-community';

import {
  CONTEXT_MENU,
  TABLE_EFFECT_ACTIONS,
  TABLE_SELECTION_COLUMN_ID,
  TABLE_TITLE,
} from '@shared/const/table.const';
import {
  selectTableData,
  setAllRowsCount,
  setSelectedRowsCount,
} from '@store/table';
import { DescriptionRendererComponent } from './description-renderer/description-renderer.component';
import { IAppState } from '@shared/interface/app.interface';
import { ITableRowData } from '@shared/interface/table.interface';
import { PublishedRendererComponent } from './published-renderer/published-renderer.component';
import { SelectionCellComponent } from './selection-cell/selection-cell.component';
import { SelectionHeaderRendererComponent } from './selection-header-renderer/selection-header-renderer.component';
import { TableHelperService } from '@shared/helper/table-helper.service';
import { ThumbnailRendererComponent } from './thumbnail-renderer/thumbnail-renderer.component';
import { ToolpanelRendererComponent } from './toolpanel-renderer/toolpanel-renderer.component';
import { VideoTitleRendererComponent } from './video-title-renderer/video-title-renderer.component';

@Injectable()
export class TableService {
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

  constructor(
    private store: Store<IAppState>,
    private tableConfigSrv: TableHelperService
  ) {}

  setTableData(): void {
    this.store.dispatch({ type: TABLE_EFFECT_ACTIONS.loadTableData });
  }

  getTableData(): Observable<ITableRowData[]> {
    return this.store.select(selectTableData);
  }

  getTableGridOptions(): GridOptions {
    const initialGridOptions = { ...this.gridOptions };

    if (initialGridOptions) {
      const gridOptions = { ...initialGridOptions };
      gridOptions.onPaginationChanged = (event: PaginationChangedEvent) =>
        this.paginationChangedHandler(event);
      gridOptions.onRowSelected = (event: RowSelectedEvent) =>
        this.rowSelectedHandler(event);

      return gridOptions;
    }

    return {};
  }

  getTableSideBar(): SideBarDef {
    return { ...this.sideBar };
  }

  getTableTitle(): string {
    return TABLE_TITLE;
  }

  getTableColumnDefs(): ColDef[] {
    return [...this.columnDefs];
  }

  getTableContextMenuItems(
    params: GetContextMenuItemsParams
  ): (string | MenuItemDef)[] {
    const columnId = params.column?.getColId();
    const defaultMenu = [...CONTEXT_MENU.defaultMenu];
    const advancedMenuItem = {
      name: CONTEXT_MENU.additionalItemName,
      action: () => {
        const url = params?.node?.data?.videoLink;

        window.open(url, '_blank');
      },
    };

    if (columnId === CONTEXT_MENU.columnIdWithAddItem) {
      return [advancedMenuItem, ...defaultMenu];
    }
    return defaultMenu;
  }

  private paginationChangedHandler(event: PaginationChangedEvent): void {
    const allRowsCount = event.api.getDisplayedRowCount() || 0;
    const payload = {
      allRowsCount,
    };
    this.store.dispatch(setAllRowsCount({ payload }));
  }

  private rowSelectedHandler(event: RowSelectedEvent): void {
    const selectedRowsCount = event.api.getSelectedRows()?.length || 0;
    const payload = {
      selectedRowsCount,
    };

    this.store.dispatch(setSelectedRowsCount({ payload }));
  }
}
