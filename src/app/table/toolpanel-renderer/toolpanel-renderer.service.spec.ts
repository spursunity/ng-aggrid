import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import { IToolPanelParams } from 'ag-grid-community';
import { filter, take } from 'rxjs/operators';

import { ToolpanelRendererService } from './toolpanel-renderer.service';
import { IAppState, TCustomAction } from '@shared/interface/app.interface';
import { CHANGE_SELECTION_STATUS } from '@store/table';
import { TableComponent } from '../table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AppModule } from 'src/app/app.module';
import { TableHelperService } from '@shared/helper/table-helper.service';
import { TableService } from '../table.service';
import { mockData } from '@shared/const/mock';

describe('ToolpanelRendererService', () => {
  let service: ToolpanelRendererService;
  let store: MockStore;
  let tableComponent: TableComponent;
  let tableFixture: ComponentFixture<TableComponent>;
  const initialState: IAppState = mockData.getEmptyInitialState();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [AppModule, MaterialModule],
      providers: [
        TableHelperService,
        TableService,
        ToolpanelRendererService,
        provideMockStore({ initialState }),
      ],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ToolpanelRendererService);
    tableFixture = TestBed.createComponent(TableComponent);
    tableComponent = tableFixture.componentInstance;
    tableFixture.detectChanges();
    await tableFixture.whenStable();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have "withSelection"', () => {
    expect(service.withSelection).toBeFalse();
  });

  it('getAllRowsCount() should return observer with "allRowsCount" <number> property of Store', (done) => {
    let allRowsCount = initialState.table.allRowsCount;
    service.getAllRowsCount().subscribe((value: number) => {
      expect(value).toEqual(allRowsCount);
      if (allRowsCount !== initialState.table.allRowsCount) {
        done();
      }
    });

    allRowsCount += 50;
    store.setState({
      table: {
        ...initialState.table,
        allRowsCount,
      },
    });
  });

  it('getHasSelection() should return observer with "hasSelection" <boolean> property of Store', (done) => {
    let hasSelection = initialState.table.hasSelection;
    service
      .getHasSelection()
      .pipe(take(1))
      .subscribe((value: boolean) => {
        expect(value).toEqual(hasSelection);
        done();
      });

    hasSelection = !hasSelection;
    store.setState({
      table: {
        ...initialState.table,
        hasSelection,
      },
    });
  });

  it('getSelectedRowsCount() should return observer with "selectedRowsCount" <number> property of Store', (done) => {
    let selectedRowsCount = initialState.table.selectedRowsCount;
    service.getSelectedRowsCount().subscribe((value: number) => {
      expect(value).toEqual(selectedRowsCount);
      if (selectedRowsCount !== initialState.table.selectedRowsCount) {
        done();
      }
    });

    selectedRowsCount += 10;
    store.setState({
      table: {
        ...initialState.table,
        selectedRowsCount,
      },
    });
  });

  it('switchSelection() should change "withSelection" value', (done) => {
    const initialWithSelection = service.withSelection;
    let dispatched = false;

    service
      .getHasSelection()
      .pipe(
        filter(() => dispatched),
        take(1)
      )
      .subscribe((value: boolean) => {
        expect(value).toEqual(service.withSelection);
        expect(service.withSelection).not.toEqual(initialWithSelection);
        done();
      });

    store.scannedActions$
      .pipe(
        filter((action: Action) => action.type === CHANGE_SELECTION_STATUS),
        take(1)
      )
      .subscribe((action: Action) => {
        const customAction = action as TCustomAction;
        dispatched = true;
        store.setState({
          table: {
            ...initialState.table,
            hasSelection: customAction?.payload?.hasSelection,
          },
        });
      });
    service.switchSelection(tableComponent.gridOptions as IToolPanelParams);
  });
});
