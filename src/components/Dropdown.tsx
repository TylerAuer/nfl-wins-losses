import React, { useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
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
  const ref = useRef(null);

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

  const onButtonClick = (): void => {
    if (isOpen) {
      setOwner('');
    }
    toggleMenu();
  };

  const onOwnerClick = (owner: string): void => {
    toggleMenu();
    setOwner(owner);
  };

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <menu className="dropdown">
      <div ref={ref}>
        <Button
          className={`dropdown__toggle ${isOpen && 'dropdown__toggle--open'}`}
          onClick={onButtonClick}
          text={isOpen ? '✕' : owner || 'Owner'}
        />
        {isOpen && <div className="dropdown__div">{ownerList}</div>}
      </div>
    </menu>
  );
}
