import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionRendererComponent } from './description-renderer.component';

describe('DescriptionRendererComponent', () => {
  let component: DescriptionRendererComponent;
  let fixture: ComponentFixture<DescriptionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
