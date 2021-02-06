import { Action } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { filter } from 'rxjs/operators';
import { IToolPanelParams } from 'ag-grid-community';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AppModule } from 'src/app/app.module';
import { CHANGE_SELECTION_STATUS } from '@store/table';
import { IAppState } from '@shared/interface/app.interface';
import { MaterialModule } from 'src/app/material/material.module';
import { mockData } from '@shared/const/mock';
import { TableComponent } from '../table.component';
import { ToolpanelRendererComponent } from './toolpanel-renderer.component';

describe('ToolpanelRendererComponent', () => {
  let store: MockStore;
  let component: ToolpanelRendererComponent;
  let fixture: ComponentFixture<ToolpanelRendererComponent>;
  let tableComponent: TableComponent;
  let tableFixture: ComponentFixture<TableComponent>;
  const initialState: IAppState = mockData.getEmptyInitialState();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent, ToolpanelRendererComponent],
      imports: [AppModule, MaterialModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(async () => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ToolpanelRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tableFixture = TestBed.createComponent(TableComponent);
    tableComponent = tableFixture.componentInstance;
    tableFixture.detectChanges();
    await tableFixture.whenStable();
    component.agInit(tableComponent.gridOptions as IToolPanelParams);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have params', () => {
    expect(component.params).toBeTruthy();
  });

  it('should dispatch "changeSelectionStatus" action', (done) => {
    let startDispatch = false;
    store.scannedActions$
      .pipe(filter(() => startDispatch))
      .subscribe((action: Action) => {
        expect(action.type).toEqual(CHANGE_SELECTION_STATUS);
        done();
      });

    startDispatch = true;
    component.switchSelection();
  });
});
