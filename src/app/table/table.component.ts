import { Component, OnInit, Self } from '@angular/core';
import { Observable } from 'rxjs';

import { TableService } from './table.service';
import { ITableRowData } from '@shared/interface/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService],
})
export class TableComponent implements OnInit {
  columnDefs: any[];
  frameworkComponents: any;
  getContextMenuItems: (params: any) => any[];
  gridOptions: any;
  hasSelection$: Observable<boolean>;
  rowData$: Observable<ITableRowData[]>;
  sideBar: any;
  tableTitle: string;

  constructor(@Self() private tableSrv: TableService) {
    this.columnDefs = this.tableSrv.tableColumnDefs;
    this.frameworkComponents = this.tableSrv.tableFrameworkComponents;
    this.getContextMenuItems = this.tableSrv.getTableContextMenuItems.bind(this.tableSrv);
    this.gridOptions = this.tableSrv.tableGridOptions;
    this.hasSelection$ = this.tableSrv.getTableHasSelection();
    this.rowData$ = this.tableSrv.getTableData();
    this.sideBar = this.tableSrv.tableSideBar;
    this.tableTitle = this.tableSrv.tableTitle;
  }

  ngOnInit(): void {
    this.tableSrv.setTableData();
  }
}
