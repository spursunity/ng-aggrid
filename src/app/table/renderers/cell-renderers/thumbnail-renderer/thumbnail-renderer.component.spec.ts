import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';

import {
  INITIAL_IMAGE_DATA,
  MOCK_AG_INIT_PARAMS_THUMBNAIL,
} from '@shared/const/mock';
import { ThumbnailRendererComponent } from './thumbnail-renderer.component';

describe('ThumbnailRendererComponent', () => {
  let component: ThumbnailRendererComponent;
  let fixture: ComponentFixture<ThumbnailRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThumbnailRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial image data', () => {
    expect(component.imageData).toEqual(INITIAL_IMAGE_DATA);
  });

  it('should set proper image data in "agInit"', () => {
    component.agInit(MOCK_AG_INIT_PARAMS_THUMBNAIL as ICellRendererParams);

    expect(component.imageData).toEqual(MOCK_AG_INIT_PARAMS_THUMBNAIL.value);
  });
});
