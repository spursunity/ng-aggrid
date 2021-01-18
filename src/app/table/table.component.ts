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
  tableTitle: string;
  columnDefs: any[];
  rowData: Observable<ITableRowData[]>;
  frameworkComponents: any;

  constructor(@Self() private tableSrv: TableService) {
    this.tableTitle = this.tableSrv.tableTitle;
    this.columnDefs = this.tableSrv.tableConfig;
    this.frameworkComponents = this.tableSrv.tableFrameworkComponents;
    this.rowData = this.tableSrv.getTableData();
  }

  ngOnInit(): void {
    this.tableSrv.setTableData();
  }
}
