import { getInitialStateWithContent } from '@shared/const/mock';
import { ITableState } from '@shared/interface/table.interface';
import {
  selectAllRowsCount,
  selectSelectedRowsCount,
  selectSelectionState,
  selectTableData,
} from '../table.selectors';

describe('TableSelectors', () => {
  let initialState: ITableState;
  let contentSize: number;
  let secondTitle: string;

  beforeEach(() => {
    initialState = getInitialStateWithContent(3, true).table;

    contentSize = initialState.content?.length;
    secondTitle = initialState.content[1]?.title;
  });

  it('should select table data', () => {
    const result = selectTableData.projector(initialState);

    expect(result.length).toEqual(contentSize);
    expect(result).toEqual(initialState.content);
    expect(result[1].title).toEqual(secondTitle);
  });

  it('should select state of selection', () => {
    const result = selectSelectionState.projector(initialState);

    expect(result).toBeTrue();
  });

  it('should select all rows count', () => {
    const result = selectAllRowsCount.projector(initialState);

    expect(result).toEqual(initialState.allRowsCount);
  });

  it('should get selected rows count', () => {
    const result = selectSelectedRowsCount.projector(initialState);

    expect(result).toEqual(initialState.selectedRowsCount);
  });
});
