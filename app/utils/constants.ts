export const YOUTUBE_API_URL: string =
  'https://youtube.googleapis.com/youtube/v3';

export const YOUTUBE_VIDEOS_API: string = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=15&key=${process.env.NEXT_PUBLIC_YOUTUBE_DATA_API_KEY}`;