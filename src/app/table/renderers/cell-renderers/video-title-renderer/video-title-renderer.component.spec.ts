import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';

import { VideoTitleRendererComponent } from './video-title-renderer.component';

describe('VideoTitleRendererComponent', () => {
  let component: VideoTitleRendererComponent;
  let fixture: ComponentFixture<VideoTitleRendererComponent>;
  const params = {
    data: {
      title: 'mock.title',
      videoLink: 'mock.videoLink',
    },
  };

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

  it('should have initial prop "videoLink" as empty string', () => {
    expect(component.videoLink).toEqual('');
  });

  it('should have initial prop "videoTitle" as empty string', () => {
    expect(component.videoTitle).toEqual('');
  });

  it('should change prop "videoLink" after "agInit"', () => {
    component.agInit(params as ICellRendererParams);

    expect(component.videoLink).toEqual(params.data.videoLink);
  });

  it('should change prop "videoTitle" after "agInit"', () => {
    component.agInit(params as ICellRendererParams);

    expect(component.videoTitle).toEqual(params.data.title);
  });
});
