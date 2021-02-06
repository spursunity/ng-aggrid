import { TestBed } from '@angular/core/testing';
import {
  IResponseTableData,
  ITableRowData,
} from '@shared/interface/table.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHelperService } from './http-helper.service';
import { TableHelperService } from './table-helper.service';

describe('TableHelperService', () => {
  let service: TableHelperService;
  let httpHelperServiceSpy: jasmine.SpyObj<HttpHelperService>;
  const mock = {
    thumbnailDefault: {
      url: 'mock.url',
      width: 111,
      height: 111,
    },
    publishedAt: 'mock.publishedAt',
    title: 'mock.title',
    description: 'mock.description',
    videoId: 'ns&smBlasmD123qw',
    kind: 'mock.kind',
  };
  const mockResponse: IResponseTableData = {
    items: [
      {
        snippet: {
          thumbnails: {
            default: {
              ...mock.thumbnailDefault,
            },
            medium: {
              ...mock.thumbnailDefault,
            },
            high: {
              ...mock.thumbnailDefault,
            },
          },
          publishedAt: mock.publishedAt,
          title: mock.title,
          description: mock.description,
        },
        id: {
          videoId: mock.videoId,
          kind: mock.kind,
        },
      },
    ],
  };
  const mockMappedData: ITableRowData[] = [
    {
      thumbnail: { ...mock.thumbnailDefault },
      publishedAt: mock.publishedAt,
      title: mock.title,
      description: mock.description,
      videoLink: `https://www.youtube.com/watch?v=${mock.videoId}`,
    },
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpHelperService', ['httpGetRequest']);

    await TestBed.configureTestingModule({
      providers: [
        TableHelperService,
        { provide: HttpHelperService, useValue: spy },
      ],
    });

    service = TestBed.inject(TableHelperService);
    httpHelperServiceSpy = TestBed.inject(
      HttpHelperService
    ) as jasmine.SpyObj<HttpHelperService>;
  });

  it('getYoutubeAPIData() should return mapped data', (done) => {
    expect(service).toBeTruthy();
    expect(httpHelperServiceSpy).toBeTruthy();

    httpHelperServiceSpy.httpGetRequest.and.returnValue(
      new Observable((subscriber) => subscriber.next(mockResponse))
    );

    service
      .getYoutubeAPIData()
      .subscribe(({ content }: { content: ITableRowData[] }) => {
        expect(content).toEqual(mockMappedData);
        done();
      });

    expect(httpHelperServiceSpy.httpGetRequest).toHaveBeenCalled();
  });
});
