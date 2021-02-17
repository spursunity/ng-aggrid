import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHeaderRendererComponent } from './selection-header-renderer.component';
import { MOCK_AG_INIT_PARAMS_COMMON } from 'src/assets/tests-utils/mock';

describe('SelectionHeaderRendererComponent', () => {
  let component: SelectionHeaderRendererComponent;
  let fixture: ComponentFixture<SelectionHeaderRendererComponent>;
  const params = {
    ...MOCK_AG_INIT_PARAMS_COMMON,
  };

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

  it('should have FALSE initial value of property "checked"', () => {
    expect(component.checked).toBeFalse();
  });
});
