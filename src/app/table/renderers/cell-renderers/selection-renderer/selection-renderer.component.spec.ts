import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';

import { MOCK_AG_INIT_PARAMS_COMMON } from 'src/assets/tests-utils/mock';
import { SelectionCellComponent } from './selection-renderer.component';

describe('SelectionCellComponent', () => {
  let fixture: ComponentFixture<SelectionCellComponent>;
  let component: SelectionCellComponent;
  let selected = false;
  const params = {
    ...MOCK_AG_INIT_PARAMS_COMMON,
    node: {
      setSelected: (newValue: boolean) => {
        selected = newValue;
      },
      isSelected: () => selected,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionCellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.agInit(params as ICellRendererParams);
    selected = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be unchecked', () => {
    expect(component.checked).toBeFalse();
  });

  it('should call "setSelected"', () => {
    spyOn(params.node, 'setSelected');
    component.selectRow();

    expect(params.node.setSelected).toHaveBeenCalled();
  });

  it('should be checked after row selection', () => {
    component.selectRow();

    expect(component.checked).toBeTrue();
  });
});
