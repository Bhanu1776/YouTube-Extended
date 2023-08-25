'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@store/hooks';
import { closeMenu } from '@store/Slices/appSlice';
import Livechat from '@/components/Watchpage/Livechat';

const Watch = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <main className="flex w-full">
      <div className="ml-24 mt-8 ">
        <iframe
          width="910"
          height="502"
          src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
      <div>
        <Livechat />
      </div>
    </main>
  );
};

export default Watch;
