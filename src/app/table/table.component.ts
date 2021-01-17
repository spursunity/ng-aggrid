import { Component, OnInit } from '@angular/core';

import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService],
})
export class TableComponent implements OnInit {
  tableName = 'Table name';
  columnDefs: any[] = [];
  rowData: any[] = [];

  constructor(private tableSrv: TableService) {}

  ngOnInit(): void {
    this.columnDefs = this.tableSrv.getTableConfig();
    this.rowData = this.tableSrv.getTableData();
  }
}
