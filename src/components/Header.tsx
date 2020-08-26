import * as React from 'react';
import Dropdown from './Dropdown';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">NFL Wins/Losses 2020</h1>
      <Dropdown list={['Tyler', 'Dan', 'Jessica']} category="Owner" />
    </header>
  );
}
