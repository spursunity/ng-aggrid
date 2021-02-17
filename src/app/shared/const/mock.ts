import { IAppState } from '@shared/interface/app.interface';

class MockData {
  getEmptyInitialState(): IAppState {
    return {
      table: {
        allRowsCount: 0,
        content: [],
        hasSelection: false,
        selectedRowsCount: 0,
      },
    };
  }

  getInitialStateWithContent(
    rows: number,
    hasSelection: boolean = false,
    selected: number = 0
  ): IAppState {
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
  }
}

export const mockData = new MockData();

export const MOCK_AG_INIT_PARAMS_THUMBNAIL = {
  value: {
    url: 'fdfdfd',
    width: 111,
    height: 222,
  },
};

export const INITIAL_IMAGE_DATA = {
  url: '',
  width: 0,
  height: 0,
};
