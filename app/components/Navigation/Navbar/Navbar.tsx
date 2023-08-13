import { BsCameraVideo, BsBell } from 'react-icons/bs';
import { IoAppsSharp } from 'react-icons/io5';

import SearchInput from '@components/Navigation/Navbar/SearchInput';
import Hamburger from '@components/Navigation/Navbar/Hamburger';

const Navbar = () => (
  <header className="sticky top-0 z-50  flex h-14 items-center justify-between bg-black bg-opacity-60 px-14 backdrop-blur-3xl backdrop-filter">
    {/* //? Logo (Left) */}
    <Hamburger />
    <SearchInput />

    {/* //? Account (Right) */}
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

export default Navbar;
