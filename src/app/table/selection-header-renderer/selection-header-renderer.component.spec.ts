import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHeaderRendererComponent } from './selection-header-renderer.component';

describe('SelectionHeaderRendererComponent', () => {
  let component: SelectionHeaderRendererComponent;
  let fixture: ComponentFixture<SelectionHeaderRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionHeaderRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionHeaderRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
