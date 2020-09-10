import * as React from 'react';
import { Rankings } from '../interfaces';
import Dropdown from './Dropdown';
import './Header.scss';

interface Props {
  owner: string;
  setOwner: (string: string) => void;
  rankings: Rankings;
}

export default function Header({ owner, setOwner, rankings }: Props) {
  return (
    <header className="header">
      <h1 className="header__title">NFL Wins/Losses 2020</h1>
      <Dropdown rankings={rankings} owner={owner} setOwner={setOwner} />
    </header>
  );
}
