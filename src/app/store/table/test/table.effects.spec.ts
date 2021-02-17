import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { MOCK_TABLE_EFFECTS_PAYLOAD } from 'src/assets/tests-utils/mock';
import { TABLE_EFFECT_ACTIONS } from '@shared/const/table.const';
import { TableEffects } from '../table.effects';
import { VideosService } from '@shared/service/videos.service';
import { TableService } from 'src/app/table/table.service';
import { ADD_TABLE_DATA_ACTION } from '../table.actions';

describe('TableEffects', () => {
  let actions$: Observable<Action>;
  let videosSrv: VideosService;
  let effects: TableEffects;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [TableService, provideMockActions(() => actions$)],
    });
    effects = TestBed.inject<TableEffects>(TableEffects);
    videosSrv = TestBed.inject(VideosService);
  });

  it('should dispatch "ADD_TABLE_DATA_ACTION" after "TABLE_EFFECT_ACTIONS.loadTableData"', () => {
    actions$ = of({ type: TABLE_EFFECT_ACTIONS.loadTableData });

    spyOn(videosSrv, 'getVideos').and.returnValues(
      of(MOCK_TABLE_EFFECTS_PAYLOAD)
    );

    effects.loadTableData$.subscribe((action) => {
      expect(action).toEqual({
        type: ADD_TABLE_DATA_ACTION,
        payload: MOCK_TABLE_EFFECTS_PAYLOAD,
      });
    });
  });
});
