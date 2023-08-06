'use client';

import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import {
  mainLinks,
  secondaryLinks,
  helpLinks,
  subscriptionLinks,
  textLinks,
} from '@/utils/SidebarLinks';

export default function Sidebar() {
  //* Subscribing to specific part of the store i.e appSlice ka isMenuOpen state
  const isMenuOpen = useAppSelector((store: RootState) => store.app.isMenuOpen);

  //* Early return ==> If isMenuOpen is False don't activate sidebar
  if (!isMenuOpen) return null;

  return (
    <aside className="sidebar w-[18%] overflow-auto bg-[#181818] pb-8 pl-2 pr-3">
      {/* //* Main Links  */}

      <ul className="mt-2 flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`rounded-xl py-3  pl-6 hover:bg-[#393838] hover:text-pink-500 ${
              name === 'Home' ? 'bg-[#393838]' : ''
            }`}
          >
            <a href="/" className="flex items-center gap-5">
              {icon}
              <span className="text-sm font-thin tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* //* Secondary Links  */}

      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="rounded-xl py-3  pl-6 hover:bg-[#393838] hover:text-pink-500"
          >
            <a href="/" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* //* Subs Links  */}

      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="rounded-xl py-3  pl-6 hover:bg-[#393838] hover:text-pink-500"
          >
            <a href="/" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* //* Help Links  */}

      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="rounded-xl py-3  pl-6 hover:bg-[#393838] hover:text-pink-500"
          >
            <a href="/" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* //* Text Links  */}

      <ul className="flex flex-wrap gap-2 p-4 text-sm text-zinc-400">
        {textLinks[0].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-2 p-4 text-sm text-zinc-400">
        {textLinks[1].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy;2023 Google</span>
      <br />
    </aside>
  );
}
