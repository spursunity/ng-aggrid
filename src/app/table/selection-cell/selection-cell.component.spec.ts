import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AppModule } from 'src/app/app.module';
import {
  IAppState,
  TCustomCellRendererComp,
} from '@shared/interface/app.interface';
import { MaterialModule } from 'src/app/material/material.module';
import { SelectionCellComponent } from './selection-cell.component';
import { TABLE_SELECTION_COLUMN_ID } from '@shared/const/table.const';
import { TableComponent } from '../table.component';
import { TableHelperService } from '@shared/helper/table-helper.service';
import { TableService } from '../table.service';
import { mockData } from '@shared/const/mock';

describe('SelectionCellComponent', () => {
  let component: SelectionCellComponent;
  let tableComponent: TableComponent;
  let tableFixture: ComponentFixture<TableComponent>;
  let html: HTMLElement;
  const initialState: IAppState = mockData.getInitialStateWithContent(2);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent, SelectionCellComponent],
      imports: [AppModule, MaterialModule],
      providers: [
        TableHelperService,
        TableService,
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  });

  beforeEach(async (done) => {
    /**
     * 'selection' column is hidden from the beginning
     * therefore we have to show it before tests
     */
    const store = TestBed.inject(MockStore);
    tableFixture = TestBed.createComponent(TableComponent);
    tableComponent = tableFixture.componentInstance;
    tableFixture.detectChanges();
    await tableFixture.whenStable();

    const eventHandler = () => {
      const instances =
        tableComponent.gridOptions?.api?.getCellRendererInstances({
          columns: [TABLE_SELECTION_COLUMN_ID],
        }) || [];
      const wrapperInstance = instances[0] as TCustomCellRendererComp<SelectionCellComponent>;
      component = wrapperInstance?.getFrameworkComponentInstance();
      html = wrapperInstance?.getGui();
      tableComponent.gridOptions?.api?.removeEventListener(
        'gridColumnsChanged',
        eventHandler
      );
      done();
    };
    tableComponent.gridOptions?.api?.addEventListener(
      'gridColumnsChanged',
      eventHandler
    );
    tableComponent?.gridOptions?.columnApi?.applyColumnState({
      state: [
        {
          colId: TABLE_SELECTION_COLUMN_ID,
          hide: false,
        },
      ],
    });
    tableFixture.detectChanges();
    await tableFixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be unchecked', () => {
    expect(component.checked).toBeFalse();
  });

  it('should have checkbox', () => {
    expect(html.querySelector('input')).toBeTruthy();
  });

  it('should be checked after row selection', () => {
    component.selectRow();

    expect(component.checked).toBeTrue();
  });
});
