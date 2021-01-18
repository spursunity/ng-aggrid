import { YOUTUBE_TOKEN } from './token';

export const TABLE_GRID_CONFIG = [
  { headerName: '', field: 'thumbnail', cellRenderer: 'thumbnailRenderer', autoHeight: true }, // thumbnails field has no column title
  { headerName: 'Published on', field: 'publishedAt' },
  { headerName: 'Video Title', field: 'title' },
  { headerName: 'Description', field: 'description' },
];

export const TABLE_TITLE = 'Youtube search ("John")';

// eslint-disable-next-line max-len
export const YOUTUBE_DATA_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_TOKEN}&maxResults=50&type=video&part=snippet&q=john`;
