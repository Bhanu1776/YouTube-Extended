'use client';

import React from 'react';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';

const List: string[] = [
  'Nextjs',
  'Cricket',
  'Music',
  'Football',
  'Reactjs',
  'Redux',
  'Live',
  'Raftaar',
  'Kr$na',
  'Karma',
  'India',
];

const List2: string[] = [
  'Nextjs',
  'Cricket',
  'Music',
  'Football',
  'Reactjs',
  'Redux',
  'Live',
  'Raftaar',
  'Kr$na',
  'Karma',
  'India',
  'IPL',
  'Dhoni',
  'SaxSux',
];

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => (
  <button
    type="button"
    className="m-3 rounded-lg px-4 py-[0.35rem] hover:bg-[#282727]"
  >
    {name}
  </button>
);

const ButtonList = () => {
  // const { isMenuOpen } = store.getState().app;
  const isMenuOpen = useAppSelector((store: RootState) => store.app.isMenuOpen);

  return (
    <section className="">
      <button
        type="button"
        className="m-3 rounded-lg bg-[#282727] px-5 py-[0.35rem]"
      >
        All
      </button>

      {isMenuOpen === true
        ? List.map((item) => <Button name={item} key={item} />)
        : List2.map((item) => <Button name={item} key={item} />)}
    </section>
  );
};

export default ButtonList;
