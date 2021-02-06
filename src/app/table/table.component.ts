import { Component, OnInit, Self } from '@angular/core';
import { Observable } from 'rxjs';
import { ColDef, GetContextMenuItems, GetContextMenuItemsParams, GridOptions, SideBarDef } from 'ag-grid-community';

import { TableService } from './table.service';
import { ITableRowData } from '@shared/interface/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService],
})
export class TableComponent implements OnInit {
  columnDefs: ColDef[];
  getContextMenuItems: GetContextMenuItems;
  gridOptions: GridOptions;
  rowData$: Observable<ITableRowData[]>;
  sideBar: SideBarDef;
  tableTitle: string;

  constructor(@Self() private tableSrv: TableService) {
    this.columnDefs = this.tableSrv.getTableColumnDefs();
    this.getContextMenuItems = (params: GetContextMenuItemsParams) => this.tableSrv.getTableContextMenuItems(params);
    this.gridOptions = this.tableSrv.getTableGridOptions();
    this.rowData$ = this.tableSrv.getTableData();
    this.sideBar = this.tableSrv.getTableSideBar();
    this.tableTitle = this.tableSrv.getTableTitle();
  }

  ngOnInit(): void {
    this.tableSrv.setTableData();
  }
}
