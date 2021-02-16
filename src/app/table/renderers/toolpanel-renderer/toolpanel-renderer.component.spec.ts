import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IToolPanelParams } from 'ag-grid-community';
import { provideMockStore } from '@ngrx/store/testing';

import { IAppState } from '@shared/interface/app.interface';
import { mockData } from '@shared/const/mock';
import { ToolpanelRendererComponent } from './toolpanel-renderer.component';
import { ToolpanelRendererService } from './toolpanel-renderer.service';

describe('ToolpanelRendererComponent', () => {
  let component: ToolpanelRendererComponent;
  let fixture: ComponentFixture<ToolpanelRendererComponent>;
  let service: ToolpanelRendererService;
  const params = {
    api: {
      deselectAll: () => {},
    },
    columnApi: {},
  };
  const initialState: IAppState = mockData.getEmptyInitialState();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolpanelRendererComponent],
      providers: [ToolpanelRendererService, provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ToolpanelRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(ToolpanelRendererService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Toolpanel service method "switchSelection"', () => {
    spyOn(service, 'switchSelection');
    component.agInit(params as IToolPanelParams);
    component.switchSelection();

    expect(service.switchSelection).toHaveBeenCalledWith(
      params as IToolPanelParams
    );
  });
});
