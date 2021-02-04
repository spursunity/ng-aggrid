import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-published-renderer',
  templateUrl: './published-renderer.component.html',
  styleUrls: ['./published-renderer.component.scss'],
})
export class PublishedRendererComponent implements ICellRendererAngularComp {
  publishedDate!: string;

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.publishedDate = params?.value || '';
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
