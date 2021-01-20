import { Component, Self } from '@angular/core';
import { IToolPanelAngularComp } from 'ag-grid-angular';
import { IToolPanelParams } from 'ag-grid-community';
import { fromEventPattern, Observable } from 'rxjs';

import { ToolpanelRendererService } from './toolpanel-renderer.service';

@Component({
  selector: 'app-toolpanel-renderer',
  templateUrl: './toolpanel-renderer.component.html',
  styleUrls: ['./toolpanel-renderer.component.scss'],
  providers: [ToolpanelRendererService],
})
export class ToolpanelRendererComponent implements IToolPanelAngularComp {
  allRowsCount$: Observable<number>;
  selectedRowsCount$: Observable<number>;
  hasSelection$: Observable<boolean>;
  params!: any;

  constructor(@Self() private toolpanelRendererSrv: ToolpanelRendererService) {
    this.hasSelection$ = this.toolpanelRendererSrv.hasSelection$;
    this.allRowsCount$ = this.toolpanelRendererSrv.allRowsCount$;
    this.selectedRowsCount$ = this.toolpanelRendererSrv.selectedRowsCount$;
  }

  agInit(params: IToolPanelParams): void {}
}
