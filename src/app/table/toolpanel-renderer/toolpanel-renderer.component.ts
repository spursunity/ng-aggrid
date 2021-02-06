import { Component, Self } from '@angular/core';
import { IToolPanelAngularComp } from 'ag-grid-angular';
import { IToolPanelParams } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { ToolpanelRendererService } from './toolpanel-renderer.service';

@Component({
  selector: 'app-toolpanel-renderer',
  templateUrl: './toolpanel-renderer.component.html',
  styleUrls: ['./toolpanel-renderer.component.scss'],
  providers: [ToolpanelRendererService],
})
export class ToolpanelRendererComponent implements IToolPanelAngularComp {
  allRowsCount$: Observable<number>;
  hasSelection$: Observable<boolean>;
  params!: IToolPanelParams;
  selectedRowsCount$: Observable<number>;
  isLoading$: Observable<boolean>;

  constructor(@Self() private toolpanelRendererSrv: ToolpanelRendererService) {
    this.allRowsCount$ = this.toolpanelRendererSrv.getAllRowsCount();
    this.hasSelection$ = this.toolpanelRendererSrv.getHasSelection();
    this.selectedRowsCount$ = this.toolpanelRendererSrv.getSelectedRowsCount();
    this.isLoading$ = this.toolpanelRendererSrv.getIsLoading();
  }

  agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  switchSelection(): void {
    this.toolpanelRendererSrv.switchSelection(this.params);
  }
}
