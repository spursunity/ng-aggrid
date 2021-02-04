import { ITableState } from '@shared/interface/table.interface';
import {
  selectAllRowsCount,
  selectIsAllRowsSelected,
  selectSelectedRowsCount,
  selectSelectionState,
  selectTableData,
} from '../table.selectors';

describe('TableSelectors', () => {
  let initialState: ITableState;
  let contentSize: number;
  let secondTitle: string;

  beforeEach(() => {
    const allRowsCount = 101;
    const selectedRowsCount = 38;
    const hasSelection = true;

    initialState = {
      content: [
        {
          thumbnail: {
            url: 'url1',
            width: 101,
            height: 101,
          },
          publishedAt: new Date(),
          title: 'title1',
          description: 'description1',
          videoLink: 'videoLink1',
        },
        {
          thumbnail: {
            url: 'url2',
            width: 202,
            height: 202,
          },
          publishedAt: new Date(),
          title: 'title2',
          description: 'description2',
          videoLink: 'videoLink2',
        },
      ],
      hasSelection,
      allRowsCount,
      selectedRowsCount,
    };

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

  it('should select comparison of all and selected rows', () => {
    const result = selectIsAllRowsSelected.projector(initialState);
    const isAllSelected =
      initialState.allRowsCount === initialState.selectedRowsCount;

    expect(result).toEqual(isAllSelected);
  });
});
