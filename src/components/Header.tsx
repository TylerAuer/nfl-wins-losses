import * as React from 'react';
import Dropdown from './Dropdown';
import './Header.scss';

interface Props {
  owner: string | null;
  setOwner: (string: string | null) => void;
}

export default function Header({ owner, setOwner }: Props) {
  return (
    <header className="header">
      <h1 className="header__title">NFL Wins/Losses 2020</h1>
      <Dropdown owner={owner} setOwner={setOwner} />
    </header>
  );
}
