/* eslint-disable prettier/prettier */

'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { RootState } from '@store/store';
import { filterVideos } from '@store/Slices/filterAppSlice';

const List: string[] = [
  'All',
  'Nextjs',
  'Cricket',
  'Music',
  'Football',
  'Reactjs',
  'Redux',
  'Live',
  'Raftaar',
  'Kr$na',
  'India',
];

const List2: string[] = [
  'All',
  'Nextjs',
  'Cricket',
  'Music',
  'Football',
  'Reactjs',
  'Redux',
  'Live',
  'Raftaar',
  'Kr$na',
  'India',
  'IPL',
  'Dhoni',
  'SaxSux',
];

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  const dispatch = useAppDispatch();
  const searchTerm: string = useAppSelector(
    (store: RootState) => store.filterApp.data,
  );

  return name === 'All' ? (
    <button
      type="button"
      className={`m-3 rounded-lg px-5 py-[0.35rem] ${
        searchTerm === '' ? 'bg-[#28282bbd]' : 'hover:bg-[#282727]'
      }`}
      onClick={() => dispatch(filterVideos(''))}
    >
      {name}
    </button>
  ) : (
    <button
      type="button"
      className={`m-3 rounded-lg px-5 py-[0.35rem] ${
        searchTerm === name ? 'bg-[#1c1b1b]' : 'hover:bg-[#282727]'
      }`}
      onClick={() => dispatch(filterVideos(name))}
    >
      {name}
    </button>
  );
};

const ButtonList = () => {
  // const { isMenuOpen } = store.getState().app;
  const isMenuOpen = useAppSelector((store: RootState) => store.app.isMenuOpen);

  return (
    <section className="mb-3 ml-8">
      {isMenuOpen === true
        ? List.map((item) => <Button name={item} key={item} />)
        : List2.map((item) => <Button name={item} key={item} />)}
    </section>
  );
};

export default ButtonList;
