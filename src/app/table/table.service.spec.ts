import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TableService } from './table.service';
import { IAppState } from '@shared/interface/app.interface';
import { HttpHelperService } from '@shared/helper/http-helper.service';
import { AppModule } from '../app.module';
import { ITableRowData } from '@shared/interface/table.interface';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import { CONTEXT_MENU } from '@shared/const/table.const';

describe('TableService', () => {
  let service: TableService;
  let store: MockStore;
  const initialState: IAppState = {
    table: {
      content: [],
      hasSelection: false,
      allRowsCount: 0,
      selectedRowsCount: 0,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [TableService, HttpHelperService, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTableData() should return observer with "content" <ITableRowData[]> property of Store', () => {
    let content = initialState.table.content;
    service.getTableData().subscribe((value: ITableRowData[]) => {
      expect(value.length).toEqual(content.length);
    });

    content = [
      {
        title: '',
        description: '',
        publishedAt: new Date(),
        thumbnail: {
          height: 0,
          width: 0,
          url: '',
        },
        videoId: '',
      },
    ];
    store.setState({
      table: {
        ...initialState.table,
        content,
      },
    });
  });

  it('getTableHasSelection() should return observer with "hasSelection" <boolean> property of Store', () => {
    let hasSelection = initialState.table.hasSelection;
    service.getTableHasSelection().subscribe((value: boolean) => {
      expect(value).toEqual(hasSelection);
    });

    hasSelection = !hasSelection;
    store.setState({
      table: {
        ...initialState.table,
        hasSelection,
      },
    });
  });

  it('getTableGridOptions() should return <GridOptions>', () => {
    expect(service.getTableGridOptions()).toBeInstanceOf(Object);
  });

  it('getTableSideBar() should return <SideBarDef>', () => {
    const sideBar = service.getTableSideBar();

    expect(sideBar).toBeInstanceOf(Object);
    expect(sideBar.toolPanels).toBeInstanceOf(Array);
  });

  it('getTableTitle() should return <string>', () => {
    expect(service.getTableTitle()).toBeInstanceOf(String);
  });

  it('getTableColumnDefs() should return <ColDef[]>', () => {
    const columnDefs = service.getTableColumnDefs();

    expect(columnDefs).toBeInstanceOf(Array);
    expect(columnDefs.length).toBeGreaterThanOrEqual(1);
  });

  it('getTableContextMenuItems() should return <(string | MenuItemDef)[]>', () => {
    const contextMenuItems = service.getTableContextMenuItems({} as GetContextMenuItemsParams);

    expect(contextMenuItems).toBeInstanceOf(Array);
    expect(contextMenuItems.length).toEqual(CONTEXT_MENU.defaultMenu.length);
  });
});
