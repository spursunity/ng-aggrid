export interface ITableState {
  content: ITableRowData[];
  hasSelection: boolean;
  allRowsCount: number;
  selectedRowsCount: number;
}

export interface ITableRowData {
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: Date | string;
  title: string;
  description: string;
  videoId: string;
}

/**
 * Youtube API data
 */
export interface IResponseTableDataItem {
  [key: string]: any;
  snippet: {
    [key: string]: any;
    thumbnails: {
      default: ITableRowData['thumbnail'];
      medium: ITableRowData['thumbnail'];
      high: ITableRowData['thumbnail'];
    };
    publishedAt: ITableRowData['publishedAt'];
    title: string;
    description: string;
  };
  id: {
    kind: string;
    videoId: string;
  };
}

export interface IResponseTableData {
  [key: string]: any;
  items: IResponseTableDataItem[];
}
