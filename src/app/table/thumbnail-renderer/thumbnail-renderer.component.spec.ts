import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should have property "imageData"', () => {
    expect(component.imageData).toBeTruthy();
  });

  it('should have property "videoLink"', () => {
    expect(component.videoLink).toEqual('');
  });

  it('should have image', () => {
    const html = fixture.nativeElement;
    expect(html.querySelector('img')).toBeTruthy();
  });
});
