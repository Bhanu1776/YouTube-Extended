/* eslint-disable prettier/prettier */

'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Link from 'next/link';
import { YOUTUBE_VIDEOS_API } from '@/utils/constants';
import { Item } from '@/Types/HomepageTypes';
import Spinner from '@/loading';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  //* Using TanStack React Query to Fetch data
  const { isLoading, isError, error } = useQuery({
    // useQuery will take two args (name, callback func where we are supposed to fetch data) and if we want to increase cache time we can add one more arg with object and increase cacheTime: 500000
    queryKey: ['HomePage Videos'],
    queryFn: () => fetch(YOUTUBE_VIDEOS_API).then((res) => res.json()), //* Abstracted Business logic(API)

    //* This will run only when data is fetched
    onSuccess: (videoData) => {
      setVideos(videoData.items);
    },
  });

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
