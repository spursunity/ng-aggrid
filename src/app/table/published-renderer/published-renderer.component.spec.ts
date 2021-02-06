import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
