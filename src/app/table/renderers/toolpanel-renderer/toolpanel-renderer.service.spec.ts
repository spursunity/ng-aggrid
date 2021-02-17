import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { IToolPanelParams } from 'ag-grid-community';
import { filter, take } from 'rxjs/operators';

import { ToolpanelRendererService } from './toolpanel-renderer.service';
import { changeSelectionStatus, initialState } from '@store/table';
import { AppModule } from 'src/app/app.module';
import { MOCK_AG_INIT_PARAMS_COMMON } from '@shared/const/mock';

describe('ToolpanelRendererService', () => {
  let service: ToolpanelRendererService;
  let store: Store;
  const params = { ...MOCK_AG_INIT_PARAMS_COMMON };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [ToolpanelRendererService],
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(ToolpanelRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('switchSelection() should call "deselectAll" GridApi and "applyColumnState" columnApi methods', (done) => {
    spyOn(params.api, 'deselectAll');
    spyOn(params.columnApi, 'applyColumnState');

    service.hasSelection$
      .pipe(
        filter((hasSelection) => hasSelection),
        take(1)
      )
      .subscribe(() => {
        service.switchSelection(params as IToolPanelParams);
        expect(params.columnApi.applyColumnState).toHaveBeenCalled();
        expect(params.api.deselectAll).toHaveBeenCalled();
        done();
      });

    service.switchSelection(params as IToolPanelParams);
  });

  it('switchSelection() should dispatch "changeSelectionStatus" action', () => {
    const payload = {
      hasSelection: !initialState.hasSelection,
    };
    spyOn(store, 'dispatch');

    service.switchSelection(params as IToolPanelParams);

    expect(store.dispatch).toHaveBeenCalledWith(
      changeSelectionStatus({ payload })
    );
  });
});
