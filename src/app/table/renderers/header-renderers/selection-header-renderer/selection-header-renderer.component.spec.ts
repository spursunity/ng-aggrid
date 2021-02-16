import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ICellRendererParams } from 'ag-grid-community';

import { AppModule } from 'src/app/app.module';
import { IAppState } from '@shared/interface/app.interface';
import { MaterialModule } from 'src/app/material/material.module';
import { SelectionHeaderRendererComponent } from './selection-header-renderer.component';
import { TableHelperService } from '@shared/helper/table-helper.service';
import { mockData } from '@shared/const/mock';
import { TableComponent } from 'src/app/table/table.component';
import { TableService } from 'src/app/table/table.service';

describe('SelectionHeaderRendererComponent', () => {
  let component: SelectionHeaderRendererComponent;
  let fixture: ComponentFixture<SelectionHeaderRendererComponent>;
  let tableComponent: TableComponent;
  let tableFixture: ComponentFixture<TableComponent>;
  let store: MockStore;
  const initialState: IAppState = mockData.getInitialStateWithContent(3);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent, SelectionHeaderRendererComponent],
      imports: [AppModule, MaterialModule],
      providers: [
        TableHelperService,
        TableService,
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    store = TestBed.inject(MockStore);

    tableFixture = TestBed.createComponent(TableComponent);
    tableComponent = tableFixture.componentInstance;
    tableFixture.detectChanges();
    await tableFixture.whenStable();

    fixture = TestBed.createComponent(SelectionHeaderRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.agInit(tableComponent.gridOptions as ICellRendererParams);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "params" property', () => {
    expect(component.params).toBeTruthy();
  });

  it('should have checkbox', () => {
    const html = fixture.nativeElement;
    expect(html.querySelector('input')).toBeTruthy();
  });

  it('should have "checked" FALSE after init', () => {
    expect(component.checked).toBeFalse();
  });

  it('changeRowsSelectionState() should change "checked"', () => {
    expect(component.checked).toBeFalse();
    component.changeRowsSelectionState();
    expect(component.checked).toBeTrue();
  });
});
