import { YOUTUBE_TOKEN } from './token';

export const TABLE_THUMBNAIL_RENDERER = 'thumbnailRenderer';

export const TABLE_GRID_CONFIG = [
  { headerName: '', field: 'thumbnail', cellRenderer: TABLE_THUMBNAIL_RENDERER, autoHeight: true }, // thumbnails field has no column title
  { headerName: 'Published on', field: 'publishedAt' },
  { headerName: 'Video Title', field: 'title', tooltipValueGetter: (params: any) => params.value },
  { headerName: 'Description', field: 'description', tooltipValueGetter: (params: any) => params.value },
];

export const TABLE_TITLE = 'Youtube search ("John")';

// eslint-disable-next-line max-len
export const YOUTUBE_DATA_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_TOKEN}&maxResults=50&type=video&part=snippet&q=john`;

const YOUTUBE_VIDEO_LINK_REPLACEMENT = '$VIDEO_ID';
const YOUTUBE_VIDEO_LINK_TEMPLATE = 'https://www.youtube.com/watch?v=';
export const YOUTUBE_VIDEO_LINK = {
  replacement: YOUTUBE_VIDEO_LINK_REPLACEMENT,
  template: `${YOUTUBE_VIDEO_LINK_TEMPLATE}${YOUTUBE_VIDEO_LINK_REPLACEMENT}`,
};

export const CONTEXT_MENU = {
  defaultMenu: ['copy', 'copyWithHeaders', 'paste'],
  additionalItemName: 'Open in new tab',
  columnIdWithAddItem: 'title',
};
