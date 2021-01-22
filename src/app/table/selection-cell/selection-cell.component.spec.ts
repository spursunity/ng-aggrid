import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { SelectionCellComponent } from './selection-cell.component';

describe('SelectionCellComponent', () => {
  let component: SelectionCellComponent;
  let fixture: ComponentFixture<SelectionCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionCellComponent],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCellComponent);
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
});
