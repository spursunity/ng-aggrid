import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Subject } from 'rxjs';

@Component({ template: '' })
export class AbstractRendererComponent
  implements ICellRendererAngularComp, OnDestroy {
  params!: ICellRendererParams;

  protected destroy$!: Subject<boolean>;

  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    }
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  protected addDestroySubject() {
    this.destroy$ = new Subject<boolean>();
  }
}
