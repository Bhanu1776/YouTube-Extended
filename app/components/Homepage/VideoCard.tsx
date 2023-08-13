import React from 'react';
import { Item } from '@Types/HomepageTypes';

const VideoCard = ({ info }: { info: Item }) => {
  // ? Destructuring the api values
  const {
    contentDetails: { duration } = {},
    snippet: {
      thumbnails: { medium: { url } = {} },
      title,
      channelTitle,
    },
    statistics: { viewCount } = {},
  } = info || undefined;

  return (
    <div className="w-70 mb-3 flex h-60 flex-col gap-3 rounded-2xl p-0">
      <div className="relative rounded-2xl">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {duration}
        </span>
        <img
          src={url}
          className="w-90 h-48 select-none rounded-2xl"
          alt="thumbnail"
        />
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <p>
            <img src={url} alt="channel" className="h-9 w-9 rounded-full" />
          </p>
        </div>
        <div>
          <h3>
            <p className=" line-clamp-2 truncate">{title}</p>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <p className="text-pink-600">{channelTitle}</p>
            </div>
            <div>
              <span className="after:mx-1 after:content-['•']">
                {viewCount} views
              </span>
              {/* <span>{data.videoAge}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
