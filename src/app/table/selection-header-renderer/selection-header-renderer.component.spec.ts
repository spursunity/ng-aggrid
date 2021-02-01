import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHeaderRendererComponent } from './selection-header-renderer.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IAppState } from '@shared/interface/app.interface';

describe('SelectionHeaderRendererComponent', () => {
  let component: SelectionHeaderRendererComponent;
  let fixture: ComponentFixture<SelectionHeaderRendererComponent>;
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
      declarations: [SelectionHeaderRendererComponent],
      imports: [MaterialModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionHeaderRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have checkbox', () => {
    const html = fixture.nativeElement;
    expect(html.querySelector('input')).toBeTruthy();
  });
});
