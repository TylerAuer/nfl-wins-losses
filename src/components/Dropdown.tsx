import React, { useState } from 'react';
import Button from './Button';
import './Dropdown.scss';

interface Props {
  owner: string | null;
  setOwner: (string: string | null) => void;
}

export default function Dropdown({ owner, setOwner }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ownerList = [
    'Tyler',
    'Jessica',
    'Jamie',
    'Amy',
    'Susan',
    'Tillman',
    'Howard',
    'Rachel',
    'Whitney',
    'Barbara',
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onOwnerClick = (owner: string | null): void => {
    toggleMenu();
    setOwner(owner);
  };

  const closed = (
    <Button key={1} onClick={toggleMenu} text={owner || 'Owner'} />
  );

  const open = (
    <>
      <Button className="button--close" onClick={toggleMenu} text="&times;" />
      <div className="dropdown__list-div">
        <ul className="dropdown__list-ul">
          {ownerList.map((owner) => {
            return (
              <li className="dropdown__list-item" key={owner}>
                <Button text={owner} onClick={() => onOwnerClick(owner)} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );

  return <menu className="dropdown">{isOpen ? open : closed}</menu>;
}
