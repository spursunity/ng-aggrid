import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { ToolpanelRendererService } from './toolpanel-renderer.service';
import { IAppState } from '@shared/interface/app.interface';
import { selectSelectionState } from '@store/table';

describe('ToolpanelRendererService', () => {
  let service: ToolpanelRendererService;
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
      providers: [ToolpanelRendererService, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ToolpanelRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have "withSelection"', () => {
    expect(service.withSelection).toBeFalse();
  });

  it('getAllRowsCount() should return observer with "allRowsCount" <number> property of Store', () => {
    let allRowsCount = initialState.table.allRowsCount;
    service.getAllRowsCount().subscribe((value: number) => {
      expect(value).toEqual(allRowsCount);
    });

    allRowsCount = 50;
    store.setState({
      table: {
        ...initialState.table,
        allRowsCount,
      },
    });
  });

  it('getHasSelection() should return observer with "hasSelection" <boolean> property of Store', () => {
    let hasSelection = initialState.table.hasSelection;
    service.getHasSelection().subscribe((value: boolean) => {
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

  it('getSelectedRowsCount() should return observer with "selectedRowsCount" <number> property of Store', () => {
    let selectedRowsCount = initialState.table.selectedRowsCount;
    service.getSelectedRowsCount().subscribe((value: number) => {
      expect(value).toEqual(selectedRowsCount);
    });

    selectedRowsCount = 10;
    store.setState({
      table: {
        ...initialState.table,
        selectedRowsCount,
      },
    });
  });
});
