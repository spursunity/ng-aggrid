interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ITableState {
  content: ITableRowData[];
  hasSelection: boolean;
  allRowsCount: number;
  selectedRowsCount: number;
}

export interface ITableRowData {
  thumbnail: IThumbnail;
  publishedAt: Date | string;
  title: string;
  description: string;
  videoLink: string;
}

export interface IResponseTableDataItem {
  snippet: {
    thumbnails: {
      default: IThumbnail;
      medium: IThumbnail;
      high: IThumbnail;
    };
    publishedAt: Date | string;
    title: string;
    description: string;
  };
  id: {
    kind: string;
    videoId: string;
  };
}

export interface IResponseTableData {
  items: IResponseTableDataItem[];
}
