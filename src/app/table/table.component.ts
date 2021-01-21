import { Component, OnInit, Self } from '@angular/core';
import { Observable } from 'rxjs';
import { ColDef, GetContextMenuItems, GridOptions, SideBarDef } from 'ag-grid-community';

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
  frameworkComponents: any;
  getContextMenuItems: GetContextMenuItems;
  gridOptions: GridOptions;
  hasSelection$: Observable<boolean>;
  rowData$: Observable<ITableRowData[]>;
  sideBar: SideBarDef;
  tableTitle: string;

  constructor(@Self() private tableSrv: TableService) {
    this.columnDefs = this.tableSrv.getTableColumnDefs();
    this.frameworkComponents = this.tableSrv.getTableFrameworkComponents();
    this.getContextMenuItems = this.tableSrv.getTableContextMenuItems.bind(this.tableSrv);
    this.gridOptions = this.tableSrv.getTableGridOptions();
    this.hasSelection$ = this.tableSrv.getTableHasSelection();
    this.rowData$ = this.tableSrv.getTableData();
    this.sideBar = this.tableSrv.getTableSideBar();
    this.tableTitle = this.tableSrv.getTableTitle();
  }

  ngOnInit(): void {
    this.tableSrv.setTableData();
  }
}
