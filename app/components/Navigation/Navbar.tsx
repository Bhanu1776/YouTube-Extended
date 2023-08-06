'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { ImMic } from 'react-icons/im';
import { BsCameraVideo, BsBell } from 'react-icons/bs';
import { IoAppsSharp } from 'react-icons/io5';
import { LuAlignLeft, LuAlignJustify } from 'react-icons/lu';

import { toggleMenu } from '@store/Slices/appSlice';
import { RootState } from '@store/store';

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  const isMenuOpen = useSelector((store: RootState) => store.app.isMenuOpen);

  return (
    <header className="sticky top-0 z-50  flex h-14 items-center justify-between bg-white/5 bg-opacity-10 px-14 backdrop-blur-3xl backdrop-filter">
      {/* //* Logo (Left) */}
      <div className="flex items-center gap-8 text-2xl">
        <div className="cursor-pointer rounded-full p-2 hover:bg-[#272626] hover:text-pink-600">
          {isMenuOpen === false ? (
            <LuAlignJustify onClick={() => toggleSidebar()} />
          ) : (
            <LuAlignLeft onClick={() => toggleSidebar()} />
          )}
        </div>
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            {/* <BsYoutube className="text-3xl text-red-600" /> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Youtubevanced.png"
              className="h-10 w-10"
              alt="Logo"
            />
            <span className="font-headings text-xl font-extrabold">
              YouTube
            </span>
          </div>
        </Link>
      </div>

      {/* //* Search (Center) */}
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handleSearch();
          }}
        >
          <div className="flex h-10 items-center rounded-3xl border-2 border-zinc-900 bg-zinc-900 px-4 pr-0 hover:border-pink-600">
            <div className="flex items-center gap-4 rounded-3xl pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="peer h-[98%] w-96 rounded-3xl border-none bg-zinc-900 focus:outline-none focus:ring-0"
                // value={searchTerm}
                // onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
              // className={`cursor-pointer rounded-3xl text-xl ${
              //   !searchTerm ? 'invisible' : 'visible'
              // }`}
              // onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button
              type="button"
              className="flex h-9 w-16 items-center justify-center rounded-r-3xl bg-zinc-800"
            >
              <AiOutlineSearch className="text-2xl text-pink-600" />
            </button>
          </div>
        </form>
        <div className="rounded-full bg-zinc-900 p-3 text-xl ">
          <ImMic className="cursor-pointer hover:text-pink-600" />
        </div>
      </div>

      {/* //* Account (Right) */}
      <div className="flex items-center gap-5 text-xl">
        <BsCameraVideo className="cursor-pointer hover:text-pink-600" />
        <IoAppsSharp className="cursor-pointer hover:text-pink-600" />
        <div className="relative">
          <BsBell className="cursor-pointer hover:text-pink-600" />
          <span className="absolute bottom-2 left-2 cursor-pointer rounded-full bg-pink-600 px-1 text-xs">
            9+
          </span>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/53951343?v=4"
          className="h-9 w-9 rounded-full ring-pink-600 hover:ring-2"
          alt="logo"
        />
      </div>
    </header>
  );
};

export default Navbar;
