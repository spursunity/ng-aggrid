import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHeaderRendererComponent } from './selection-header-renderer.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('SelectionHeaderRendererComponent', () => {
  let component: SelectionHeaderRendererComponent;
  let fixture: ComponentFixture<SelectionHeaderRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionHeaderRendererComponent],
      imports: [MaterialModule],
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

  it('should be unchecked', () => {
    expect(component.checked).toBeFalse();
  });

  it('should have checkbox', () => {
    const html = fixture.nativeElement;
    expect(html.querySelector('input')).toBeTruthy();
  });

  // it('should change checkbox on true', () => {
  //   component.changeRowsSelectionState();
  //   expect(component.checked).toBeTrue();
  // });

  // it('should have property params', () => {
  //   expect(component.params).toBeTruthy();
  // });
});
