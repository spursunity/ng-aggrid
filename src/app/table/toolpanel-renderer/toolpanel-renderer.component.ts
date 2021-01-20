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

  constructor(@Self() private toolpanelRendererSrv: ToolpanelRendererService) {
    this.allRowsCount$ = this.toolpanelRendererSrv.allRowsCount$;
    this.hasSelection$ = this.toolpanelRendererSrv.hasSelection$;
    this.selectedRowsCount$ = this.toolpanelRendererSrv.selectedRowsCount$;
  }

  agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  switchSelection() {
    this.toolpanelRendererSrv.switchSelection(this.params);
  }
}
