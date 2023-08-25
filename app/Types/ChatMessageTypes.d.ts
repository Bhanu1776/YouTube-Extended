export interface ChatMessageTypes {
  kind: string;
  etag: string;
  pollingIntervalMillis: number;
  pageInfo: PageInfo;
  nextPageToken: string;
  items: Item[];
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  authorDetails: AuthorDetails;
}

export interface AuthorDetails {
  channelId: string;
  channelUrl: string;
  displayName: string;
  profileImageUrl: string;
  isVerified: boolean;
  isChatOwner: boolean;
  isChatSponsor: boolean;
  isChatModerator: boolean;
}

export interface Snippet {
  type: string;
  liveChatId: string;
  authorChannelId: string;
  publishedAt: Date;
  hasDisplayContent: boolean;
  displayMessage: string;
  textMessageDetails: TextMessageDetails;
}

export interface TextMessageDetails {
  messageText: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
