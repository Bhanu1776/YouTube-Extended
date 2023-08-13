'use client';

import { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { ImMic } from 'react-icons/im';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="flex items-center justify-center gap-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex h-10 items-center rounded-3xl border-2 border-zinc-900 bg-zinc-900 px-4 pr-0 hover:border-pink-600">
          <div className="flex items-center gap-4 rounded-3xl pr-5">
            <div>
              <AiOutlineSearch className="text-xl" />
            </div>
            <input
              type="text"
              className="peer h-[98%] w-96 border-none bg-zinc-900 focus:outline-none focus:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
  );
};

export default SearchInput;
