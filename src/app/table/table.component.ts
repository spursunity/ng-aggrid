import { Component, OnInit, Self } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '@shared/interface/app.interface';
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

  constructor(@Self() private tableSrv: TableService) {
    this.tableTitle = this.tableSrv.tableTitle;
    this.columnDefs = this.tableSrv.tableConfig;
    this.rowData = this.tableSrv.getTableData();
  }

  ngOnInit(): void {}
}
