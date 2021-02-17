import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';

import { MOCK_AG_INIT_PARAMS_PUBLISHED_DATE } from 'src/assets/tests-utils/mock';
import { PublishedRendererComponent } from './published-renderer.component';

describe('PublishedRendererComponent', () => {
  let component: PublishedRendererComponent;
  let fixture: ComponentFixture<PublishedRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishedRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set proper "publishedDate" value', () => {
    component.agInit(MOCK_AG_INIT_PARAMS_PUBLISHED_DATE as ICellRendererParams);

    expect(component.publishedDate).toEqual(
      MOCK_AG_INIT_PARAMS_PUBLISHED_DATE.value
    );
  });
});
