import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TableService } from './table.service';
import { IAppState } from '@shared/interface/app.interface';
import { AppModule } from '../app.module';
import { ITableRowData } from '@shared/interface/table.interface';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import { CONTEXT_MENU } from '@shared/const/table.const';
import {
  getEmptyInitialState,
  getInitialStateWithContent,
} from '@shared/const/mock';

describe('TableService', () => {
  let service: TableService;
  let store: MockStore;
  const initialState: IAppState = getEmptyInitialState();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [TableService, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have table data as observer with "content" <ITableRowData[]> property of Store', () => {
    let content = initialState.table.content;
    service.tableData$.subscribe((value: ITableRowData[]) => {
      expect(value.length).toEqual(content.length);
    });

    content = getInitialStateWithContent(1).table.content;
    store.setState({
      table: {
        ...initialState.table,
        content,
      },
    });
  });

  it('getTableGridOptions() should return <GridOptions>', () => {
    const gridOptions = service.getTableGridOptions();

    expect(gridOptions).toBeInstanceOf(Object);
    expect(gridOptions.onPaginationChanged).toBeTruthy(Object);
    expect(gridOptions.onRowSelected).toBeTruthy(Object);
  });

  it('getTableSideBar() should return <SideBarDef>', () => {
    const sideBar = service.sideBar;

    expect(sideBar).toBeInstanceOf(Object);
    expect(sideBar.toolPanels).toBeInstanceOf(Array);
  });

  it('getTableColumnDefs() should return <ColDef[]>', () => {
    const columnDefs = service.columnDefs;

    expect(columnDefs).toBeInstanceOf(Array);
    expect(columnDefs.length).toBeGreaterThanOrEqual(1);
  });

  it('getTableContextMenuItems() should return <(string | MenuItemDef)[]>', () => {
    const contextMenuItems = service.getTableContextMenuItems(
      {} as GetContextMenuItemsParams
    );

    expect(contextMenuItems).toBeInstanceOf(Array);
    expect(contextMenuItems.length).toEqual(CONTEXT_MENU.defaultMenu.length);
  });
});
