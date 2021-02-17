import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TableService } from './table.service';
import { IAppState } from '@shared/interface/app.interface';
import { AppModule } from '../app.module';
import { ITableRowData } from '@shared/interface/table.interface';
import { GetContextMenuItemsParams } from 'ag-grid-community';
import {
  getEmptyInitialState,
  getInitialStateWithContent,
  MOCK_CONTEXT_MENU_SNAPSHOT,
  MOCK_GRID_OPTIONS_SNAPSHOT,
} from 'src/assets/tests-utils/mock';

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
    expect(JSON.stringify(gridOptions)).toEqual(MOCK_GRID_OPTIONS_SNAPSHOT);
  });

  it('getTableContextMenuItems() should return <(string | MenuItemDef)[]>', () => {
    const contextMenuItems = service.getTableContextMenuItems(
      {} as GetContextMenuItemsParams
    );
    expect(JSON.stringify(contextMenuItems)).toEqual(
      MOCK_CONTEXT_MENU_SNAPSHOT
    );
  });
});
