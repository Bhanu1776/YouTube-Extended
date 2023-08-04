export interface HomePageVideos {
  kind: string;
  etag: string;
  items: Item[];
  nextPageToken: string;
  pageInfo: PageInfo;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: string;
  regionRestriction?: RegionRestriction;
}

export interface ContentRating {}

export interface RegionRestriction {
  allowed: string[];
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
