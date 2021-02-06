import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTitleRendererComponent } from './video-title-renderer.component';

describe('VideoTitleRendererComponent', () => {
  let component: VideoTitleRendererComponent;
  let fixture: ComponentFixture<VideoTitleRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoTitleRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTitleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
