import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ColDef,
  GetContextMenuItemsParams,
  GridOptions,
  ITooltipParams,
  MenuItemDef,
  PaginationChangedEvent,
  RowSelectedEvent,
  SideBarDef,
} from 'ag-grid-community';

import {
  CONTEXT_MENU,
  TABLE_EFFECT_ACTIONS,
  TABLE_SELECTION_COLUMN_ID,
} from '@shared/const/table.const';
import {
  selectTableData,
  setAllRowsCount,
  setSelectedRowsCount,
} from '@store/table';
import { IAppState } from '@shared/interface/app.interface';
import { ToolpanelRendererComponent } from './renderers/toolpanel-renderer/toolpanel-renderer.component';
import { GlobalWindowService } from '@shared/service/global-window.service';
import {
  DescriptionRendererComponent,
  PublishedRendererComponent,
  SelectionCellComponent,
  SelectionHeaderRendererComponent,
  ThumbnailRendererComponent,
  VideoTitleRendererComponent,
} from './renderers';

@Injectable()
export class TableService {
  tableData$ = this.store.select(selectTableData);

  readonly columnDefs: ColDef[] = [
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
      tooltipValueGetter: (params: ITooltipParams) => params.value,
      flex: 3,
    },
    {
      headerName: 'Description',
      field: 'description',
      cellRendererFramework: DescriptionRendererComponent,
      tooltipValueGetter: (params: ITooltipParams) => params.value,
      wrapText: true,
      flex: 3,
    },
  ];

  readonly sideBar: SideBarDef = {
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

  private gridOptions: GridOptions = {
    rowHeight: 90,
    defaultColDef: {
      menuTabs: ['generalMenuTab'],
    },
  };

  constructor(
    private store: Store<IAppState>,
    private globalWindowSrv: GlobalWindowService
  ) {}

  setTableData(): void {
    this.store.dispatch({ type: TABLE_EFFECT_ACTIONS.loadTableData });
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

  getTableContextMenuItems(
    params: GetContextMenuItemsParams
  ): (string | MenuItemDef)[] {
    const columnId = params.column?.getColId();
    const defaultMenu = [...CONTEXT_MENU.defaultMenu];
    const advancedMenuItem = {
      name: CONTEXT_MENU.additionalItemName,
      action: () => {
        const url = params?.node?.data?.videoLink;

        this.globalWindowSrv.openInNewTab(url);
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
