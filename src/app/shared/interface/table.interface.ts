export interface ITableState {
  content: ITableRowData[];
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
