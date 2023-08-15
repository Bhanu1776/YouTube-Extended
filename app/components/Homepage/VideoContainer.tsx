/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */

'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Item } from '@/Types/HomepageTypes';
import useFetchVideosData from '@/Hooks/useFetchVideosData';
import Spinner from '@/loading';
import VideoCard from '@components/Homepage/VideoCard';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import { YOUTUBE_VIDEOS_API, YOUTUBE_FILTER_API } from '@/utils/constants';

const VideoContainer = () => {
  const searchTerm: string = useAppSelector(
    (store: RootState) => store.filterApp.data,
  );

  const FilterSearchAPI: string = `${YOUTUBE_FILTER_API}&q=${searchTerm}`;

  // ? useFetchVideosData is the custom Hook(Purpose is to fetch Data)
  const { data, isLoading, isError, error, refetch } = useFetchVideosData(
    'HomePage Videos',
    searchTerm === '' ? YOUTUBE_VIDEOS_API : FilterSearchAPI,
    true,
  );

  useEffect(() => {
    refetch();
  }, [searchTerm]);

  //* Handling Errors
  if (isLoading) return <Spinner />;

  if (data?.error?.code === 403) {
    return (
      <div className="grid h-screen place-items-center">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent">
          Search API Limit Exceeded. Please try after sometime.
        </h1>
      </div>
    );
  }

  if (isError) return `Error: ${(error as Error).message}`;

  return (
    <div className="ml-10 flex flex-wrap gap-4">
      {data?.items?.map((item: Item) => (
        <Link href={`/watch?v=${item.id}`}>
          <VideoCard key={item.id} info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
