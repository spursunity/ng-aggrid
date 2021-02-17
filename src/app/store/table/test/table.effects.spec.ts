import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { IAppState } from '@shared/interface/app.interface';
import { mockData } from '@shared/const/mock';
import { TABLE_EFFECT_ACTIONS } from '@shared/const/table.const';
import { TableEffects } from '../table.effects';
import { VideosService } from '@shared/service/videos.service';
import { TableService } from 'src/app/table/table.service';

describe('TableEffects', () => {
  let actions$: Observable<Action>;
  let store: MockStore<IAppState>;
  let service: TableService;
  const initialState: IAppState = mockData.getEmptyInitialState();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        TableService,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(TableService);
    TestBed.inject<TableEffects>(TableEffects);
    TestBed.inject(VideosService);
  });

  it('should emit loadTable action', (done) => {
    actions$ = of({ type: TABLE_EFFECT_ACTIONS.loadTableData });
    actions$.subscribe((action: Action) => {
      expect(action).toBeTruthy();
      done();
    });

    service.setTableData();
  });
});
