import React, { useState } from 'react';
import Button from './Button';
import './Dropdown.scss';

interface Owner {
  owner: {
    shortName: string;
  };
}

interface Props {
  owner: string | null;
  setOwner: (string: string | null) => void;
  rankings: Owner[] | null;
}

export default function Dropdown({ owner, setOwner, rankings }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  if (!rankings) {
    return null;
  }

  // Use rankings to generate a list of owners for dropdown
  let ownerList = rankings.map((o: Owner) => {
    const name = o.owner.shortName;
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

  const onOwnerClick = (owner: string | null): void => {
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
