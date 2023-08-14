/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */

'use client';

import { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { ImMic } from 'react-icons/im';
import { LuHistory } from 'react-icons/lu';
import useFetchVideosData from '@/Hooks/useFetchVideosData';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { cacheResults } from '@store/Slices/searchSlice';
import { RootState } from '@store/store';
import { SearchSuggestionApiDataType } from '@/Types/SearchSuggestionApiTypes';
import { YOUTUBE_SEARCH_API } from '@/utils/constants';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  //* Caching the input suggestions to reduce the network calls
  // On searching the same value again (suppose: k20pro) then suggestions will be pulled from cache not API!
  const searchCache: { [key: string]: string[] } = useAppSelector(
    (store: RootState) => store.search,
  );
  const dispatch = useAppDispatch();

  //* Debouncing
  const onSuccess = (VideoData: SearchSuggestionApiDataType) => {
    setSuggestions(VideoData[1]);
    // Once data is fetched we are storing the data in our redux store
    dispatch(
      cacheResults({
        [searchQuery]: VideoData[1],
      }),
    );
  };
  const { refetch } = useFetchVideosData(
    'Search Suggestions',
    `${YOUTUBE_SEARCH_API}${searchQuery}`,
    false,
    onSuccess,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      // Checking if the suggestions are stored in cache(redux store)
      if (searchCache[searchQuery]) {
        // searching the searchQuery value as key in an object
        setSuggestions(searchCache[searchQuery]);
      } else {
        refetch();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex items-center justify-center gap-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
          className={`flex h-10 items-center rounded-3xl ${
            showSuggestions &&
            searchQuery &&
            'rounded-bl-none border-0 hover:border-none'
          } border-2 border-zinc-900 bg-zinc-900 px-4 pr-0 hover:border-pink-600`}
        >
          <div className="flex items-center gap-4 rounded-3xl  pr-5">
            <div>
              <AiOutlineSearch className="text-xl" />
            </div>
            <input
              type=""
              className="peer h-[98%] w-96 border-none bg-zinc-900 focus:outline-none focus:ring-0"
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)} // Blur => Focus out
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <AiOutlineClose
              className={`cursor-pointer rounded-3xl text-xl ${
                !searchQuery ? 'invisible' : 'visible'
              }`}
              onClick={() => setSearchQuery('')}
            />
          </div>
          <button
            type="button"
            className="flex h-9 w-16 items-center justify-center rounded-r-3xl bg-zinc-800"
          >
            <AiOutlineSearch className="text-2xl text-pink-600" />
          </button>
        </div>

        {/* //? HeadsUp Suggestions box */}
        {showSuggestions && (
          <div className="fixed w-[30.7rem] cursor-pointer rounded-b-xl border border-zinc-950 bg-zinc-950 bg-opacity-90 text-base shadow-lg backdrop-blur-3xl backdrop-filter">
            <ul>
              {suggestions &&
                suggestions.map((results: string) =>
                  results === '' ? null : (
                    <li
                      key={results}
                      className="my-2 flex gap-4 px-5 hover:bg-black hover:text-pink-600"
                    >
                      <LuHistory className="mt-1 text-lg" /> {results}
                    </li>
                  ),
                )}
            </ul>
          </div>
        )}
      </form>

      {/* //? Voice Search MIC Icon  */}
      <div className="rounded-full bg-zinc-900 p-3 text-xl ">
        <ImMic className="cursor-pointer hover:text-pink-600" />
      </div>
    </div>
  );
};

export default SearchInput;
