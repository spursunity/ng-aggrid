import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';

import { MOCK_AG_INIT_PARAMS_DESCRIPTION } from 'src/assets/tests-utils/mock';
import { DescriptionRendererComponent } from './description-renderer.component';

describe('DescriptionRendererComponent', () => {
  let component: DescriptionRendererComponent;
  let fixture: ComponentFixture<DescriptionRendererComponent>;
  const params = { ...MOCK_AG_INIT_PARAMS_DESCRIPTION };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.agInit(params as ICellRendererParams);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set proper value for "description" property', () => {
    expect(component.description).toEqual(
      MOCK_AG_INIT_PARAMS_DESCRIPTION.value
    );
  });
});
