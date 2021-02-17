import { TestBed } from '@angular/core/testing';
import {
  IResponseTableData,
  ITableRowData,
} from '@shared/interface/table.interface';
import { BaseHttpService } from './base-http.service';
import { VideosService } from './videos.service';

describe('VideosService', () => {
  let service: VideosService;
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
    const spy = jasmine.createSpyObj('BaseHttpService', ['httpGetRequest']);

    await TestBed.configureTestingModule({
      providers: [VideosService],
    });

    service = TestBed.inject(VideosService);
  });

  // it('getVideos() should return mapped data', (done) => {
  //   expect(service).toBeTruthy();
  //   expect(BaseHttpServiceSpy).toBeTruthy();

  //   service.httpGetRequest.and.returnValue(
  //     new Observable((subscriber) => subscriber.next(mockResponse))
  //   );

  //   service
  //     .getVideos()
  //     .subscribe(({ content }: { content: ITableRowData[] }) => {
  //       expect(content).toEqual(mockMappedData);
  //       done();
  //     });

  //   expect(BaseHttpServiceSpy.httpGetRequest).toHaveBeenCalled();
  // });
});
