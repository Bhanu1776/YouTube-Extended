/* eslint-disable prettier/prettier */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { YOUTUBE_VIDEOS_API } from '@/utils/constants';
import { Item } from '@/Types/HomepageTypes';
import useFetchVideosData from '@/Hooks/useFetchVideosData';
import Spinner from '@/loading';
import VideoCard from '@components/Homepage/VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  // ? SideEffect, Called after data is fetched
  const onSuccess = (videoData: any) => {
    setVideos(videoData.items);
  };

  // ? useFetchVideosData is the custom Hook(Purpose is to fetch Data)
  const { isLoading, isError, error } = useFetchVideosData(
    'HomePage Videos',
    YOUTUBE_VIDEOS_API,
    onSuccess,
  );

  if (isLoading) return <Spinner />;

  if (isError) return `Error: ${(error as Error).message}`;

  return (
    <div className="ml-10 flex flex-wrap gap-4">
      {videos.map((item: Item) => (
        <Link href={`/watch?v=${item.id}`}>
          <VideoCard key={item.id} info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
