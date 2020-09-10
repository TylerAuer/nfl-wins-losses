import React, { useState } from 'react';
import { Rankings } from '../interfaces';
import Button from './Button';
import './Dropdown.scss';

interface Props {
  owner: string;
  setOwner: (string: string) => void;
  rankings: Rankings;
}

export default function Dropdown({ owner, setOwner, rankings }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Use rankings to generate a list of owners for dropdown
  let ownerList = rankings.map((person) => {
    const name = person.owner.info.shortName;
    return (
      <button
        key={name}
        onClick={() => onOwnerClick(name)}
        className="dropdown__button"
      >
        {name}
      </button>
    );
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onOwnerClick = (owner: string): void => {
    toggleMenu();
    setOwner(owner);
  };

  return (
    <menu className="dropdown">
      <Button
        className="dropdown__toggle"
        onClick={toggleMenu}
        text={owner || 'Owner'}
      />
      {isOpen && <div className="dropdown__div">{ownerList}</div>}
    </menu>
  );
}
