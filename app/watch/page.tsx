'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@store/hooks';
import { closeMenu } from '@store/Slices/appSlice';

const Watch = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div>
      <iframe
        width="800"
        height="502"
        src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Watch;
