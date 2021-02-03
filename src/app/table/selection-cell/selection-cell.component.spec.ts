import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SelectionCellComponent } from './selection-cell.component';
import { TABLE_SELECTION_COLUMN_ID } from '@shared/const/table.const';
import { TableConfigHelper } from '@shared/helper/table-config-helper.service';
import { IAppState } from '@shared/interface/app.interface';
import { AppModule } from 'src/app/app.module';
import { MaterialModule } from 'src/app/material/material.module';
import { TableComponent } from '../table.component';
import { TableService } from '../table.service';

describe('SelectionCellComponent', () => {
  let component: SelectionCellComponent;
  let tableComponent: TableComponent;
  let tableFixture: ComponentFixture<TableComponent>;
  let html: HTMLElement;
  const initialState: IAppState = {
    table: {
      content: [
        {
          thumbnail: {
            url: 'url',
            width: 100,
            height: 100,
          },
          publishedAt: new Date(),
          title: 'title',
          description: 'description',
          videoId: 'videoId',
        },
      ],
      hasSelection: true,
      allRowsCount: 0,
      selectedRowsCount: 0,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent, SelectionCellComponent],
      imports: [AppModule, MaterialModule],
      providers: [
        TableConfigHelper,
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
      const wrapperInstance: any = instances[0];
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
