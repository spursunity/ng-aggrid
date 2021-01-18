export interface ITableState {
  content: any[];
}

export interface ITableRowData {
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: Date;
  title: string;
  description: string;
}
