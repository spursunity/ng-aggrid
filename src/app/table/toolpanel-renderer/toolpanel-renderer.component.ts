import { Component, Self } from '@angular/core';
import { IToolPanelAngularComp } from 'ag-grid-angular';
import { IToolPanelParams } from 'ag-grid-community';

import { ToolpanelRendererService } from './toolpanel-renderer.service';

@Component({
  selector: 'app-toolpanel-renderer',
  templateUrl: './toolpanel-renderer.component.html',
  styleUrls: ['./toolpanel-renderer.component.scss'],
  providers: [ToolpanelRendererService],
})
export class ToolpanelRendererComponent implements IToolPanelAngularComp {
  allRowsCount$ = this.toolpanelRendererSrv.allRowsCount$;
  hasSelection$ = this.toolpanelRendererSrv.hasSelection$;
  selectedRowsCount$ = this.toolpanelRendererSrv.selectedRowsCount$;

  private params!: IToolPanelParams;

  constructor(@Self() private toolpanelRendererSrv: ToolpanelRendererService) {}

  agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  switchSelection(): void {
    this.toolpanelRendererSrv.switchSelection(this.params);
  }
}
