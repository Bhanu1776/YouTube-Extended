'use client';

import React from 'react';
import Link from 'next/link';
import { LuAlignLeft, LuAlignJustify } from 'react-icons/lu';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleMenu } from '@store/Slices/appSlice';
import { RootState } from '@store/store';

const Hamburger = () => {
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  const isMenuOpen = useAppSelector((store: RootState) => store.app.isMenuOpen);

  return (
    <div className="flex items-center gap-8 text-2xl">
      <div
        className="cursor-pointer rounded-full p-2 hover:bg-[#272626] hover:text-pink-600"
        role="button"
        tabIndex={0}
        // onKeyUp={() => toggleSidebar()}
        aria-hidden="true"
        onClick={() => toggleSidebar()}
      >
        {isMenuOpen === false ? <LuAlignJustify /> : <LuAlignLeft />}
      </div>
      <Link href="/">
        <div className="flex select-none items-center justify-center gap-1">
          {/* <BsYoutube className="text-3xl text-red-600" /> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Youtubevanced.png"
            className="h-10 w-10"
            alt="Logo"
          />
          <span className="font-headings text-xl font-extrabold">YouTube</span>
        </div>
      </Link>
    </div>
  );
};

export default Hamburger;
