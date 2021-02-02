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

import { CONTEXT_MENU, TABLE_EFFECT_ACTIONS, TABLE_TITLE } from '@shared/const/table.const';
import { IAppState } from '@shared/interface/app.interface';
import { ITableRowData } from '@shared/interface/table.interface';
import { selectTableData, setAllRowsCount, setIsLinkProp, setSelectedRowsCount } from '@store/table';
import { TableConfigHelper } from '@shared/helper/table-config-helper.service';

@Injectable()
export class TableService {
  constructor(private store: Store<IAppState>, private tableConfigSrv: TableConfigHelper) {}

  setTableData(): void {
    this.store.dispatch({ type: TABLE_EFFECT_ACTIONS.loadTableData });
  }

  getTableData(): Observable<ITableRowData[]> {
    return this.store.select(selectTableData);
  }

  getTableGridOptions(): GridOptions {
    const initialGridOptions = this.tableConfigSrv.getTableGridOptions();

    if (initialGridOptions) {
      const gridOptions = { ...initialGridOptions };
      gridOptions.onPaginationChanged = (event: PaginationChangedEvent) => this.paginationChangedHandler(event);
      gridOptions.onRowSelected = (event: RowSelectedEvent) => this.rowSelectedHandler(event);

      return gridOptions;
    }

    return {};
  }

  getTableSideBar(): SideBarDef {
    const sideBar = this.tableConfigSrv.getTableSideBar();

    if (sideBar) {
      return { ...sideBar };
    }

    return {};
  }

  getTableTitle(): string {
    return TABLE_TITLE;
  }

  getTableColumnDefs(): ColDef[] {
    const columnDefs = this.tableConfigSrv.getTableColumnDefs();

    if (columnDefs) {
      return [...columnDefs];
    }

    return [];
  }

  getTableContextMenuItems(params: GetContextMenuItemsParams): (string | MenuItemDef)[] {
    const columnId = params.column?.getColId();
    const isLink = params.node?.data?.thumbnail?.isLink;
    const defaultMenu = [...CONTEXT_MENU.defaultMenu];
    const advancedMenuItem = {
      name: CONTEXT_MENU.additionalItemName,
      action: () => {
        const id = params?.node?.data?.videoId;
        const payload = {
          videoId: id,
          isLinkFlag: !isLink,
        };

        this.store.dispatch(setIsLinkProp({ payload }));
      },
      checked: isLink,
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
