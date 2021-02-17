import { IAppState } from '@shared/interface/app.interface';
import { ITableRowData } from '@shared/interface/table.interface';

export const getInitialStateWithContent = (
  rows: number,
  hasSelection: boolean = false,
  selected: number = 0
): IAppState => {
  const content = [];

  for (let i = 0; i < rows; i++) {
    content.push({
      thumbnail: {
        url: 'url' + i,
        width: 10 * i + 10,
        height: 10 * i + 10,
      },
      publishedAt: new Date(),
      title: 'title' + i,
      description: 'description' + i,
      videoLink: 'videoLink' + i,
    });
  }

  const table = {
    allRowsCount: rows,
    content,
    hasSelection,
    selectedRowsCount: selected,
  };

  return {
    table,
  };
};

export const getEmptyInitialState = (): IAppState => ({
  table: {
    allRowsCount: 0,
    content: [],
    hasSelection: false,
    selectedRowsCount: 0,
  },
});

export const MOCK_AG_INIT_PARAMS_COMMON = {
  api: {
    deselectAll: () => {},
    selectAll: () => {},
    getDisplayedRowCount: () => 10,
    getSelectedRows: () => new Array(11),
  },
  columnApi: {
    applyColumnState: ({}) => {},
  },
};

export const MOCK_AG_INIT_PARAMS_THUMBNAIL = {
  value: {
    url: 'fdfdfd',
    width: 111,
    height: 222,
  },
};

export const MOCK_AG_INIT_PARAMS_PUBLISHED_DATE = {
  value: new Date().toString(),
};

export const INITIAL_IMAGE_DATA = {
  url: '',
  width: 0,
  height: 0,
};

export const MOCK_TABLE_EFFECTS_PAYLOAD: { content: ITableRowData[] } = {
  content: [
    {
      thumbnail: {
        url: 'ttt',
        width: 111,
        height: 111,
      },
      publishedAt: new Date().toString(),
      title: 'snippet.title',
      description: 'snippet.description',
      videoLink: 'https://www.youtube.com/watch?v=1882',
    },
  ],
};
