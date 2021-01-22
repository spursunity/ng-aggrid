import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpHelperService } from '@shared/helper/http-helper.service';

import { IAppState } from '@shared/interface/app.interface';
import { AppModule } from '../app.module';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let store: MockStore;
  const initialState: IAppState = {
    table: {
      content: [],
      hasSelection: false,
      allRowsCount: 0,
      selectedRowsCount: 0,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [AppModule],
      providers: [TableService, HttpHelperService, provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table title', () => {
    const html = fixture.nativeElement;
    const allSpans = html.querySelectorAll('span');

    expect(allSpans.length).toBeGreaterThanOrEqual(1);

    const titleSpan = [...allSpans].find((elem: HTMLElement) => component.tableTitle === elem.textContent);

    expect(titleSpan).toBeTruthy();
  });

  it('should have grid API', () => {
    expect(component.gridOptions.api).toBeTruthy();
  });

  it('should have grid cells', () => {
    const publishedAt = '11.11.1111';
    const title = 'ttt';
    const description = 'ddd';
    const rows = [
      {
        thumbnail: {
          url: 'string',
          width: 10,
          height: 10,
        },
        publishedAt,
        title,
        description,
        videoId: 'string',
      },
    ];

    component.gridOptions.api?.setRowData(rows);

    const element = fixture.nativeElement;
    const cellElements = element.querySelectorAll('.ag-cell-value');

    expect(cellElements.length).toBeGreaterThan(1);
    expect(cellElements[1].textContent).toEqual(publishedAt);
    expect(cellElements[2].textContent).toEqual(title);
    expect(cellElements[3].textContent).toEqual(description);
  });
});
