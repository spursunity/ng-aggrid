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
    isLink?: boolean;
  };
  publishedAt: Date | string;
  title: string;
  description: string;
  videoId: string;
}
