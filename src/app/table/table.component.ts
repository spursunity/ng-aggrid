import { Component, OnInit, Self } from '@angular/core';
import { GetContextMenuItemsParams } from 'ag-grid-community';

import { TableService } from './table.service';
import { TABLE_TITLE } from '@shared/const/table.const';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService],
})
export class TableComponent implements OnInit {
  columnDefs = this.tableSrv.columnDefs;
  gridOptions = this.tableSrv.getTableGridOptions();
  rowData$ = this.tableSrv.tableData$;
  sideBar = this.tableSrv.sideBar;
  tableTitle = TABLE_TITLE;

  constructor(@Self() private tableSrv: TableService) {}

  ngOnInit(): void {
    this.tableSrv.setTableData();
  }

  getContextMenuItems = (params: GetContextMenuItemsParams) =>
    this.tableSrv.getTableContextMenuItems(params);
}
