import { Pipe, PipeTransform } from '@angular/core';
import { ITableRowData } from '@shared/interface/table.interface';

@Pipe({
  name: 'tableDataTransform',
})
export class TableDataTransformPipe implements PipeTransform {
  transform(tableData: ITableRowData[] | null): ITableRowData[] {
    if (tableData?.length) {
      return tableData.map((rowData) => {
        const publishDate = new Date(rowData.publishedAt);
        if (Number(publishDate)) {
          const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
          const dateString = publishDate.toLocaleDateString(undefined, dateOptions);

          return { ...rowData, publishedAt: dateString };
        }
        return rowData;
      });
    }
    return [];
  }
}
