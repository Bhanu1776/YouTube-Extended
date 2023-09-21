import React from 'react';
import { Item } from '@Types/HomepageTypes';
import Image from 'next/image';

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
    <div className="mx-3 mb-3 flex max-w-[21rem] flex-col gap-3 rounded-2xl">
      <div className="relative rounded-2xl">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {duration}
        </span>
        {url ? (
          <Image
            src={url}
            objectFit="cover"
            priority
            quality={80}
            alt="thumbnail"
            className="w-90 h-48 select-none rounded-2xl"
            height={1000}
            width={1000}
          />
        ) : (
          <div>Loading..</div>
        )}
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          {url ? (
            <Image
              src={url}
              objectFit="cover"
              quality={50}
              alt="channel"
              className="h-9 w-9 rounded-full"
              height={1000}
              width={1000}
            />
          ) : (
            <div>Loading..</div>
          )}
        </div>
        <div>
          <h3 className="line-clamp-2 font-medium hover:text-pink-600">
            {title}
          </h3>
          <div className="text-sm text-gray-400">
            <p className="text-pink-600">{channelTitle}</p>
            <span className="after:mx-1 after:content-['•']">
              {viewCount} views
            </span>
            {/* <span>{data.videoAge}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
